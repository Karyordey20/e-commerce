const mongoose = require("mongoose")

const productCategory = new mongoose.Schema({
    name:{type:String}
})

const Category = new mongoose.model(("Category"), productCategory)

module.exports = Category