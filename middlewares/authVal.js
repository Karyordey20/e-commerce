const User = require("../models/authModel")
const bcrypt = require("bcrypt")

const validateAuth = async(req,res, next) =>{
     try {
        const {Name,Email,Password,State,PhoneNumber,Role} =  req.body
   
       const findUser = await User.findOne({Email}).select("-Password")
       
        if(!Name){
           return res.status(401).json({message:"Name is required"})
        } 
        if(!Email){
           return res.status(401).json({message:"Email is required"})
        }else if(!validateEmail(Email)){
           return res.status(401).json({message:"Invalid email input"})
        }else if(findUser){
           return res.status(401).json({message:"User alread exist"})
        }
       if(!Password){
           return res.status(401).json({message:"Password is required"})
        }
        if(!State){
           return res.status(401).json({message:"State is required"})
        }
        if(!PhoneNumber){
           return res.status(401).json({message:"Phonenumber is required"})
        } 
   
   
        next()
     } catch (error) {
        res.status(500).json({message:error.message})
     }
}

const loginValidation = async(req,res,next) =>{
    try {
        const {Email, Password} = req.body
    
        const findUser = await User.findOne({Email})
    
        if(!Email){
               return res.status(401).json({message:"Email is required"})
        }else if(!validateEmail(Email)){
               return res.status(401).json({message:"Invalid email input"})
        }else if(!findUser){
               return res.status(404).json({message:"User not found"})
        }
    
        const isValid = await bcrypt.compare(Password, findUser.Password)
    
        if(!Password){
             return res.status(401).json({message:"Password is required"})
        }else if(!isValid){
             return res.status(401).json({message:"email or password is invalid"})
        }
        next()
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
function validateEmail(Email) {

  const emailPattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  
  return emailPattern.test(String(Email).toLocaleLowerCase());
  
  }

module.exports = {validateAuth, loginValidation}