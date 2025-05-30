const jwt = require("jsonwebtoken")
const User = require("../models/authModel")
const dotenv = require("dotenv").config()

const verifyToken = async(req,res, next) =>{
   try {
     const getToken = req.header("Authorization")


     if(!getToken){
         return res.status(400).json({message:"Unauthorization Access"})
     }
     const splitToken = getToken.split(" ")
     const Token = splitToken[1]
     
     const decodeToken = jwt.verify(Token, `${process.env.ACCESS_TOKEN}`)
    //  const decodeRefreshToken = jwt.verify(Token, `${process.env.REFRESH_TOKEN}`)
    
     
     if(!decodeToken){
         return res.status(400).json({message:"Access Denied"})
     }
    //  if(!decodeRefreshToken){
    //      return res.status(400).json({message:"Access Denied"})
    //  }
    
     const findUser = await User.findById(decodeToken.id)
     if(!findUser){
         return res.status(404).json({message:"Not found"})
     }
     req.findUser = findUser

    
     next()
   } catch (error) {
    return res.status(500).json({message:error.message})
   }
}

module.exports = verifyToken