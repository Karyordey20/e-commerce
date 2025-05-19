const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const connectDb = require("./Db")
const authRoute = require("./route/authRoute")
// const verifyToken = require("./middlewares/token")
// const User = require("./models/authModel")
const CategoryRoute = require("./route/prdtCatRoute")
const Route = require("./route/others")
const productRoute = require("./route/product")

const PORT =process.env.PORT || 8097
connectDb()
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})

app.use(("/api"),authRoute)//auth route
app.use(("/api"), CategoryRoute)
app.use(("/api"), Route)
app.use(("/api"),productRoute)


app.get(("/"), (req,res) =>{
    res.status(200).json({message:"welcome to e-commerce database"})
})



