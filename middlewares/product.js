const productValidation = async(req,res, next) =>{
    try {
        const {name,discription,image,price,inStock,category} = req.body
        const errors = []
        if(!name){
            errors.push("input product name")
        }
        if(!price){
            errors.push("product price is required")
        }
        if(!category){
            errors.push("product category is required")
        }
    
        if(errors.length > 0 ){
            res.status(400).json({message:errors})
        }

        next()

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {productValidation}