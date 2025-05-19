const mongoose = require("mongoose")
const Category = require("./prdtCat")

Category()
const productSchema = new mongoose.Schema(
    {
    name:{type:String},
    discription:{type:String, default:""},
    image:{type:String, default:""},
    price:{type:Number, default:0},
    inStock:{type:Boolean, default:false},
    category:{type:mongoose.Schema.Types.ObjectId, ref:"Category"}
}
)

const Product = new mongoose.model(("Product"), productSchema)

module.exports = Product
