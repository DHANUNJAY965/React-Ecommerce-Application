const zod = require("zod");
const jwt = require("jsonwebtoken");
const AdminModel = require("../Models/AdminModel");
const Secret = process.env.JWT_SECRET;

const signupvalidate = zod.object({
  Email: zod.string().email(),
  username: zod.string(),
  password: zod.string(),
});

const Signup = async (req, res) => {
  const { Email, username, password } = req.body;
  const valide = signupvalidate.safeParse({ Email, username, password });

  // console.log("validate : ", valide);
  if (!valide.success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      success: false,
    });
  }

  try {
   

    const useresponse = await AdminModel.create({
      Email,
      password,
      username,
    });

    // console.log("usererspoe : ", useresponse);

    // Save the user document to the database
    await useresponse.save();

    const userid = useresponse._id;

    const token = jwt.sign(
      {
        userid,
      },
      Secret
    );

    res.json({
      message: "Registered Successfully",
      token: token,
      success: true,
    });
  } catch (err) {
    console.log("error : ", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong with server please try again later",
      Error: err.message,
    });
  }
};

module.exports = Signup;
