const jwt = require("jsonwebtoken")
const User = require("../models/authModel")
const adminValidation = async(req,res,next)=>{
  try {
      const getToken = req.header("Authorization")
      if(!getToken){
          return res.status(400).json({message:"Unauthorization Access"})
      }
      const splitToken = getToken.split(" ")
  
      const Token = splitToken[1]
  
      decodeToken = jwt.verify(Token, `${process.env.ACCESS_TOKEN}`)
      if(!decodeToken){
           return res.status(400).json({message:"Access Denied"})
       }
      
      const findUser = await User.findById(decodeToken?.id)
       if(!findUser){
           return res.status(404).json({message:"Not found"})
       }
  
      if(findUser.Role !== "Admin"){
          return res.status(401).json({message:"Action denied(Admin only)!!!"})
      }
      req.findUser = findUser
      next()
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
module.exports = adminValidation