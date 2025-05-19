const express =require("express")
const { validateAuth, loginValidation} = require("../middlewares/authVal")
const { registerUser, UserLogin } = require("../controller/auth")

const authRoute = express.Router()

authRoute.post(("/register-user"),validateAuth,registerUser)
authRoute.post(("/login-user"), loginValidation,UserLogin)

module.exports = authRoute