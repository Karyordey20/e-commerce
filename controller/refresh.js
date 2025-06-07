const jwt = require("jsonwebtoken")
// const { UserLogin } = require("./auth")
const User = require("../models/authModel")
const refreshToken = async(req,res) =>{
    try {
        const {refreshToken} = req.body
        if(!refreshToken){
            return res.status(400).json({message:"provide token"})
        }
        const verifyRefreshToken =  jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
        if(!verifyRefreshToken){
            return res.status(401).json({message:"invalid token"})
        }
        const user = await User.findById(verifyRefreshToken.id)
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const newAccessToken = jwt.sign({id:user._id, Name:user.Name}, process.env.ACCESS_TOKEN, {"expiresIn": "5h"})
        res.status(200).json({access_token:newAccessToken})
        // console.log(newAccessToken)
        // const newAccessToken = UserLogin
        // res.status(200).json({messsage:newAccessToken})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = refreshToken