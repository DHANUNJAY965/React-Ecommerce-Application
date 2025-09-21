const Product = require("../Models/Products");
const zod = require("zod");

const datavalidate = zod.object({
  title: zod
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  price: zod.number().min(1, { message: "Price must be at least 1" }),
  description: zod
    .string()
    .min(10, { message: "Description must be at least 10 characters long" }),
  category: zod
    .string()
    .min(3, { message: "Category must be at least 3 characters long" }),
});

const updateproduct = async (req, res) => {
  const { title, price, description, category, id } = req.body;
  const parsedPrice = parseFloat(price);
  const validation = datavalidate.safeParse({
    title,
    category,
    price: parsedPrice,
    description,
  });
  if (!validation.success) {
    console.log("Validation failed: ", validation.error);
    return res.json({
      success: false,
      message: "Enter all the details correctly with more than 5 length.",
      errors: validation.error,
    });
  }
  try {
    const update = {
      title,
      price,
      description,
      category,
    };
    const product = await Product.findByIdAndUpdate(id, update, { new: true });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Internal Server Error",
      Error: err.message,
    });
  }
};

module.exports = updateproduct;
