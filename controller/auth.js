const User = require("../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const forgotPasswordMail = require("./sendMail")
const { findOneUser } = require("../services")


// user registration function
const registerUser = async(req,res) =>{
    
    try {
        const {Name,Email,Password,State,PhoneNumber,Role} =  req.body
    
        const hashPassword = await bcrypt.hash(Password,12)
    
        const newUser = new User({Name,Email,Password:hashPassword,State,PhoneNumber,Role})

        await newUser.save()
    
        res.status(200).json(
            {
                message:"Registration successful",
                newUser
             }
            )
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

    // user login function
const UserLogin = async (req,res) =>{
   try {
     const {Email, Password} = req.body
    //  const Users = await User.findOne({Email})
    const Users = await findOneUser(Email)
     const Token = jwt.sign({id:Users._id,Name:Users.Name} ,`${process.env.ACCESS_TOKEN}`, {"expiresIn": "5h"})
     const refreshToken = jwt.sign({id:Users._id,Name:Users.Name} ,`${process.env.REFRESH_TOKEN}`, {"expiresIn": "30d"})
     res.status(200).json(
         {
             message:"Successful",
             Token,
             Users,
             refreshToken
        }
        
     )
   } catch (error) {
     res.status(500).json({message:error.message})
   }
    
}

// forget password funtion

const forgetPassword = async (req,res) =>{
    const {Email} = req.body
   try {
     if(!Email){
         res.status(401).json({message:"please input your email"})
     }
    //  const Users = await User.findOne({Email})
        const Users = findOneUser(Email)
     if(!Users){
         res.status(404).json({message:"user not found"})
     }
     // send user email with thier token
         const Token =  jwt.sign({id:Users._id,Name:Users.Name}, `${process.env.ACCESS_TOKEN}`, {expiresIn:"5m"})
 
         await forgotPasswordMail(Email,Token)

         res.status(200).json({message:"please check your email"})
   } catch (error) {
    res.status(500).json({message:error.message})
   }

}

// password reset

 const resetPassword = async(req,res) =>{
    try {
        const {Password} = req.body
        const user = await findOneUser({Email:req.User.Email})
        if(!user){
            res.status(404).json({message:"User not found"})
        }
        const hashPassword = await bcrypt.hash(Password,12)
        user.Password = hashPassword
        await user.save()
        res.status(200).json({message:"password reset successful"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }
module.exports = {registerUser,UserLogin, forgetPassword, resetPassword}