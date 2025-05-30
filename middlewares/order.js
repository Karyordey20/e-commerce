const validateOrder = (req,res,next) =>{
   try {
     const{items,user } = req.body
     const errors = []
     if(!items){
         errors.push("items is required")
     }
    //  if(!total){
    //      errors.push("total is required")
    //  }
     if(!user){
         errors.push("user is required")
     }
     if(errors.length > 0){
         return res.status(401).json({mesage:errors})
     }
     next()
   } catch (error) {
    res.status(500).json({message:error.mesage})
   }
}
module.exports = validateOrder