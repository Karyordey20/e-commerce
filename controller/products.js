const Product = require("../models/products")

const createProduct = async(req,res) =>{
    try {
        const {name,discription,image,price,inStock,category} = req.body
        if(inStock === false){
            return res.status(401).json({message:"out of stock"})
        }
        const newProduct = new Product({name,discription,image,price,inStock,category})
        await newProduct.save()
        res.status(200).json({message:"Successful", newProduct})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getAllProduct = async(req,res) =>{
    try {
        const products = await Product.find().populate("category")
        res.status(200).json({message:products})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getOneProduct = async(req,res) =>{
    try {
        const {id} = req.params
        const products = await Product.findOne().populate("category")
        res.status(200).json({message:products})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = {createProduct, getAllProduct,getOneProduct}