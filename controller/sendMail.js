const nodemailer = require("nodemailer")

const forgotPasswordMail = async (Email, Token)=>{
    try {
        const mailTransport = nodemailer.createTransport({
           service:"gmail",
            auth:{
                user: `${process.env.EMAIL}`,
                pass: `${process.env.EMAIL_PASSWORD}`
            }
        });
        const mailDetails = {
            from:`${process.env.EMAIL}`,
            to:`${Email}`,
            subject: "Forgot Email message",
            html: `<h1>Here is a token to reset your password, please click on the button</h1>
             <button><a href = "https://e-commerce-0r8i.onrender.com/reset_password/${Token}">Reset Password</a></button>
    
             if the button does not work, kindly click on the link below to reset your password
    
             <a href:"https://e-commerce-0r8i.onrender.com/reset_password/${Token}">Reset Password</a>
             ${Token}
            `
            }
    
            await mailTransport.sendMail(mailDetails)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}
module.exports = forgotPasswordMail