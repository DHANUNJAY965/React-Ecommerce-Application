const zod=require("zod");
const jwt = require("jsonwebtoken");
const AdminModel=require("../Models/AdminModel");
const Secret = process.env.JWT_SECRET;
const signinBody = zod.object({
    Email: zod.string().email(),
    password: zod.string(),
  });
  
const signin= async (req, res) => {   
    const { success } = signinBody.safeParse({
      Email: req.body.data.Email,
      password: req.body.data.password,
    });
    // console.log("the req.body is :",req.body);
    
    if (!success) {
      return res.json({
        success:false,
        message: "Incorrect inputs",
      });
    }
    // console.log("req.bod", req.body);
    const user = await AdminModel.findOne({
        Email: req.body.data.Email,
      password: req.body.data.password,
    });
  console.log("user", user);
    if (user) {
      const token = jwt.sign(
        {
          userid: user._id,
        },
        Secret
      );
  
      res.json({
        message: "Sigined Successfully",
        token: token,
        success:true
      });
      return;
    }
  
    return res.json({
        success:false,
      message: "Wrong credentials or Email does not exist",
    });
  }

  module.exports =signin;