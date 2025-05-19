const express = require("express")
const {createCate, getAllCategories, deleteAcAT, deleteAllCat} = require("../controller/prdtCatCtrl")
const verifyToken = require("../middlewares/token")

const CategoryRoute = express.Router()

CategoryRoute.post(("/createCategory"),verifyToken, createCate)
CategoryRoute.get(("/getAllCat"),verifyToken, getAllCategories)
CategoryRoute.delete(("/deleteACat/:id"),verifyToken, deleteAcAT)
CategoryRoute.delete(("/deleteAllCat"),verifyToken, deleteAllCat)

module.exports = CategoryRoute