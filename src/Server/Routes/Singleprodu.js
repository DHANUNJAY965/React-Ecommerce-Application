const productmod=require("../Models/Products");
const singleproduct= async (req,res)=>{
     try
     {
        const productId = req.params.id;
        const product= await productmod.findById(productId);
        return res.json({success:true, product:product});
     }
     catch(error){
        return res.json({success:false, message:"something went wrong", Error: error.message});
     }
}

module.exports = singleproduct;