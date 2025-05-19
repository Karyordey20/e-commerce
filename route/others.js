const express = require("express")
const { getAllUsers } = require("../controller/others")
const verifyToken = require("../middlewares/token")

const Route = express.Router()

Route.get(("/get"), getAllUsers)
Route.get(("/token"),verifyToken)

module.exports = Route