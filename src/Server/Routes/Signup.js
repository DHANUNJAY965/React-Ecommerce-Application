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

  // Validate the inputs
  const validateResult = signupvalidate.safeParse({ Email, username, password });
  if (!validateResult.success) {
    return res.status(400).json({
      message: "Invalid input data",
      success: false,
      errors: validateResult.error.errors, // Send detailed validation errors
    });
  }

  try {
    // Check if the email is already registered
    const existingUser = await AdminModel.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered",
      });
    }

    // Create a new user
    const userResponse = await AdminModel.create({
      Email,
      password,
      username,
    });

    // Save the user document to the database
    await userResponse.save();

    const userId = userResponse._id;

    // Check if JWT Secret is defined
    if (!Secret) {
      return res.status(500).json({
        success: false,
        message: "Server configuration error: JWT secret is missing",
      });
    }

    // Sign the JWT token
    const token = jwt.sign(
      {
        userId,
      },
      Secret,
      
    );

    // Send the success response with the token
    return res.status(201).json({
      message: "Registered successfully",
      token: token,
      success: true,
    });
  } catch (err) {
    console.error("Server error: ", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong with the server, please try again later",
      error: err.message,
    });
  }
};

module.exports = Signup;