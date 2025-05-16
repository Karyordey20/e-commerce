const mongoose = require("mongoose")
const dotenv = require("dotenv")
const connectDb = ()=>{
mongoose.connect((`${process.env.DATABASE_URI}`))
.then(() =>{
    console.log("Database Connected...")
})}

module.exports = connectDb