const User = require("../models/authModel")


const findOneUser = async(Email) =>{
    const User = await User.findOne({Email})
    return User
}

module.exports = {
    findOneUser
}