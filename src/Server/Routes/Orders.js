const OrderModel = require("../Models/OrderModel");
const AdminModel = require("../Models/AdminModel");

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { products, totalAmount, userInfo } = req.body;
    const userId = req.userid;

    // Verify user exists
    const user = await AdminModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Create order
    const order = new OrderModel({
      userId,
      products,
      totalAmount,
      userInfo: {
        username: user.username,
        email: user.Email,
        ...userInfo
      }
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message
    });
  }
};

// Get all orders (Admin only)
const getAllOrders = async (req, res) => {
  try {
    const userId = req.userid; // From AuthMiddleware (note: lowercase 'id')

    // Check if user is admin
    const user = await AdminModel.findById(userId);
    console.log("user", user);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin role required."
      });
    }

    const orders = await OrderModel.find()
      .populate('userId', 'username Email')
      .sort({ orderDate: -1 });

    res.json({
      success: true,
      orders
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message
    });
  }
};

// Get user's orders
const getUserOrders = async (req, res) => {
  try {
    const userId = req.userid; // From AuthMiddleware (note: lowercase 'id')

    const orders = await OrderModel.find({ userId })
      .sort({ orderDate: -1 });

    res.json({
      success: true,
      orders
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getUserOrders
};
