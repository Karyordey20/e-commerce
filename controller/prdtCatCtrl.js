const Category = require("../models/prdtCat")

// creating a new category of products
const createCate = async(req, res) =>{
    try {
        const {name} = req.body
    
         if(!name){
            return res.status(400).json({message:"please input the category name"})
        }


        const newCategory = new Category({name})

        await newCategory.save()

        res.status(200).json({message:"Successful", newCategory})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// get all categories of products
const getAllCategories = async(req,res)=>{
    try {
        const allCat = await Category.find()
        res.status(200).json({message:allCat})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// delete a category 

const deleteAcAT = async(req,res) =>{
    try {
        const {id} = req.params
        const findCat =  await Category.findByIdAndDelete(id)
        res.status(200).json({message:"Successful"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteAllCat = async(req,res)=>{
    try {
        const deleteAllCat = await Category.deleteMany()
        res.status(200).json({message:"Successful"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = {createCate,getAllCategories,deleteAcAT,deleteAllCat }