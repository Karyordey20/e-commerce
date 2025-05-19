const User = require("../models/authModel")

const getAllUsers = async(req,res) =>{
    try {
        const findAll = await User.find()
        res.status(200).json({message:findAll})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const authorization =  (req,res) =>{
  res.status(200).json({message: req.findUser })
}

module.exports = {getAllUsers, authorization}