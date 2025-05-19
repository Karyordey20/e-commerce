const express = require("express")
const { productValidation } = require("../middlewares/product")
const {createProduct, getAllProduct, getOneProduct} = require("../controller/products")
const verifyToken = require("../middlewares/token")

productRoute = express.Router()

productRoute.post(("/create-product"),verifyToken,productValidation,createProduct)
productRoute.get(("/get-all-product"),verifyToken, getAllProduct)
productRoute.get(("/getOneProduct/:id"),verifyToken, getOneProduct)

module.exports = productRoute