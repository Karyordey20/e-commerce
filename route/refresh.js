const express = require("express")
const refreshToken = require("../controller/refresh")
const refresh = express.Router()

refresh.post(("/accessToken"), refreshToken)

module.exports = refresh