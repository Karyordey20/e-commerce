const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const connectDb = require("./Db")
const authRoute = require("./route/authRoute")
const verifyToken = require("./validation/token")
const CategoryRoute = require("./route/prdtCatRoute")
const User = require("./models/authModel")
const PORT =process.env.PORT || 8097

connectDb()
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})

app.use(("/api"),authRoute)//auth route
app.use(("/api"), CategoryRoute)


app.get(("/token"),verifyToken, (req,res) =>{
  res.status(200).json({message: req.findUser })
})
app.get(("/"), (req,res) =>{
    res.status(200).json({message:"welcome to e-commerce database"})
})

app.get(("/get"), async(req,res) =>{
    try {
        const findAll = await User.find()
        res.status(200).json({message:findAll})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

