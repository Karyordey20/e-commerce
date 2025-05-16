const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    Name:{type:String, require:true},
    Email:{type:String, require:true},
    Password:{type:String, require:true},
    State:{type:String},
    PhoneNumber:{type:String, require:true},
    Role:{type:String, default:"User"}
})

const User = new mongoose.model("User", userSchema)

module.exports = User