const express = require("express")
const refreshToken = require("../controller/refresh")
const refresh = express.Router()

refresh.get(("/history"), refreshToken)

module.exports = refresh