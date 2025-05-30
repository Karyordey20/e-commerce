const express = require("express")
const validateOrder = require("../middlewares/order")
const { createOrder, updateOrder, getOneOrder, viewPastOrder } = require("../controller/order")
const verifyToken = require("../middlewares/token")
const adminValidation = require("../middlewares/admin")
orderRoute = express.Router()

orderRoute.post(("/createNewOrder"),verifyToken, validateOrder,createOrder)
orderRoute.put(("/updateOrder/:id"), verifyToken, updateOrder)
orderRoute.get(("/findOrder/:id"), verifyToken,adminValidation,getOneOrder)
orderRoute.get(("/orderHistory"), verifyToken, viewPastOrder)

module.exports = orderRoute