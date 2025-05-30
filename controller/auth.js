const User = require("../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

const UserLogin = async (req,res,next) =>{
   try {
     const {Email, Password} = req.body
     const Users = await User.findOne({Email})
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

module.exports = {registerUser,UserLogin}