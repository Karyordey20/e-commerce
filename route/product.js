const express = require("express")
const { productValidation } = require("../middlewares/product")
const {createProduct, getAllProduct, getOneProduct} = require("../controller/products")
const verifyToken = require("../middlewares/token")
const adminValidation = require("../middlewares/admin")

productRoute = express.Router()

productRoute.post(("/create-product"),productValidation,verifyToken,adminValidation,createProduct)
productRoute.get(("/get-all-product"),verifyToken,adminValidation, getAllProduct)
productRoute.get(("/getOneProduct/:id"),verifyToken,adminValidation, getOneProduct)

module.exports = productRoute