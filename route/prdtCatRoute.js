const express = require("express")
const createCate = require("../controller/prdtCatCtrl")

const CategoryRoute = express.Router()

CategoryRoute.post(("/create-category"), createCate)

module.exports = CategoryRoute