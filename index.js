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
const orderRoute = require("./route/order")
const adminValidation = require("./middlewares/admin")
const refresh = require("./route/refresh")
const cors = require("cors")

const PORT =process.env.PORT || 8097
connectDb()
app.use(express.json())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})

app.use(("/api"),authRoute)//auth route
app.use(("/api"), CategoryRoute)
app.use(("/api"), Route)
app.use(("/api"),productRoute)
app.use(("/api"), orderRoute )
app.use(("/api"),refresh )



app.get(("/"), (req,res) =>{
    res.status(200).json({message:"welcome to e-commerce database"})
})
app.get(("/test-admin"),adminValidation, (req,res) =>{

})


