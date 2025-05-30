const Order = require("../models/order")

const createOrder = async(req,res) =>{
   try {
     const{items, total,user,status} = req.body
     const newOrder = new Order({items, total,user,status})
     await newOrder.save()
     res.status(200).json({message:"Order successfuly placed", newOrder})
   } catch (error) {
    res.status(500).json({message:error.message})
   }
} 

const updateOrder = async(req,res) =>{
try {
        const {id} = req.params
        const {items, total,user,status} = req.body
        const update = await Order.findByIdAndUpdate(id, {
            items, total,user,status
        }, {new:true})
        if(!update){
            return res.status(404).json({message:"Order not found"})
        }
        res.status(200).json({message:"Successful", update})
        // if(update){
        //    return( update?.items = items,
        //     update?.total = total,
        //     update?.status = status
        // )}else if(!update){
        //     res.status(404).json({message:"order not found"})
        // }}
        // await update.save()

} catch (error) {
    res.status(500).json({message:error.message})
}}

const getOneOrder = async(req,res) =>{
    try {
        const {id} = req.params
        const findOrder = await Order.findById(id)
         if(!findOrder){
            return res.status(404).json({message:"Order not found"})
        }
        res.status(200).json({message:"Successful", findOrder})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const viewPastOrder = async(req,res) =>{
    try {
        const {id} = req.params
        const getPastOrder = await Order.findById(id)
        if(!getPastOrder){
            return res.status(401).json({message:"Can't get order"})
        }
        res.status(200).json({mesage:getPastOrder})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {createOrder, updateOrder,getOneOrder, viewPastOrder}