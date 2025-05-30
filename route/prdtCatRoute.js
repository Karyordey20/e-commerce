const express = require("express")
const {createCate, getAllCategories, deleteAcAT, deleteAllCat} = require("../controller/prdtCatCtrl")
const verifyToken = require("../middlewares/token")
const adminValidation = require("../middlewares/admin")

const CategoryRoute = express.Router()

CategoryRoute.post(("/createCategory"),verifyToken,adminValidation, createCate)
CategoryRoute.get(("/getAllCat"),verifyToken,adminValidation, getAllCategories)
CategoryRoute.delete(("/deleteACat/:id"),verifyToken,adminValidation, deleteAcAT)
CategoryRoute.delete(("/deleteAllCat"),verifyToken,adminValidation, deleteAllCat)

module.exports = CategoryRoute