
const produc=require('../Models/Products');
const products=async (req,res)=>{

    try{
       const response=await produc.find({});
       console.log("response is : ",response);
      return res.json({products:response});
    }
    catch(err){
      return  res.json({success:false,message:"Error while fetching the data",Error:err.message});
    }

}

module.exports=products;