
const zod = require("zod");
const Product = require("../Models/Products");

const validatedetails = zod.object({
  title: zod.string(),
  price: zod.number(),
  description: zod.string(),
  category: zod.string(),
});

const uploadtodb = async (req, res) => {
  const { title, price, description, category,FuturingImage } = req.body;
  const parsedimage=Number.parseInt(FuturingImage);
  const parsedPrice = parseFloat(price);
  console.log("here are the details : ", title, price, description, category,parsedimage);

  const validation = validatedetails.safeParse({ title, category, price:parsedPrice, description });

  if (!validation.success) {
    console.log("Validation failed: ", validation.error);
    return res.json({ success: false, message: "Enter all the details correctly.", errors: validation.error });
  }

  try {
    const response = await Product.create({
      title,
      price,
      description,
      category,
      ImageUrl: req.Imageurl,
      FuturingImage:parsedimage
    });

    // console.log("here is the data inserted : ", response);
    return res.json({ success: true, message: "Data inserted successfully.", data: response });
  } catch (err) {
    console.log("Insert failed: ", err);
    return res.json({ success: false, message: "Insert failed", error: err });
  }
};

module.exports = uploadtodb;
