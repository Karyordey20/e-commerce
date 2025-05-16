const Category = require("../models/prdtCat")

const createCate = async(req, res,next) =>{
    try {
        const {name} = req.body
    
         if(!name){
            return res.status(400).json({message:"please input the category name"})
        }

        const newCategory = new Category({name})
        await newCategory.save()

        next()
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = createCate