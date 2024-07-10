const Product=require("../Models/Products");
const DeleteProduct=async (req,res)=>{

    const {_id}=req.body;
    try{
        const response= await Product.findByIdAndDelete(_id);
        if(response)
        {
            // console.log("the response is : ",response);
           return res.status(200).json({
            success:true,
            message:"Product deleted successfully",
            response:response

           })
        }
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }
    catch(err){
        return res.json({success:false,message:"Internal Server Error"});
    }

}

module.exports = DeleteProduct;