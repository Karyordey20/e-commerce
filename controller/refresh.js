const jwt = require("jsonwebtoken")
const { UserLogin } = require("./auth")
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
        const newAccessToken = UserLogin
        res.status(200).json({messsage:newAccessToken})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = refreshToken