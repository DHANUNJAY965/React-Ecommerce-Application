const secreat = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const UserAuth = (req, res, next) => {

  const authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ success:false,message: "Sorry your not signed in please login first", });
  }

  const token = authHeader.split(" ")[1];
  console.log("token", token);

  try {
    const decoded = jwt.verify(token, secreat);
    console.log("decoded", decoded);
    if (decoded) {
      req.userid = decoded.userid;
      console.log("req.userid", req.userid);
      next();
    }
  } catch (err) {
    return res
      .status(403)
      .json({success:false, message: "error occured while authenticating im middleware" });
  }
};


module.exports =  UserAuth;

