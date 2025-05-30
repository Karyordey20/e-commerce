const mongoose = require("mongoose")
const Product = require("./products")
const User = require("./authModel")

Product()
User()

const orderSchema = new mongoose.Schema({
    items:[{type:mongoose.Schema.Types.ObjectId, ref:"Product"}],
    total:{type:Number, default:0},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    status:{type:String, default:"pending"},
    Date:{type:Date}
})

const Order = new mongoose.model(("Order"), orderSchema)

module.exports = Order