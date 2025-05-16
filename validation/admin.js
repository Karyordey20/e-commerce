const User = require("../models/authModel")

const adminVal = async(req, res, next)=>{
    const {id} = req.params
    const user = await User.findById(id)
    if(user.Role === "User"){
        return res.status(401).json({message:"Admin Only"})
    }
next()
}

module.exports = adminVal