const express =require("express")
const { validateAuth, loginValidation} = require("../middlewares/authVal")
const { registerUser, UserLogin, forgetPassword, resetPassword } = require("../controller/auth")
const verifyToken = require("../middlewares/token")

const authRoute = express.Router()

authRoute.post(("/register-user"),validateAuth,registerUser)
authRoute.post(("/login-user"), loginValidation,UserLogin)
authRoute.post("/forget_password", verifyToken, forgetPassword )
authRoute.post(("/reset_password"), verifyToken,resetPassword)

module.exports = authRoute