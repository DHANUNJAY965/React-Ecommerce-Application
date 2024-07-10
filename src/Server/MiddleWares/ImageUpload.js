const cloudinary=require("cloudinary").v2;
exports.imageUplaod = async (req, res,next) => {

  const { ImageFile,ImageUrl } = req.body;
  if(ImageUrl && typeof ImageUrl === 'string')
  {
  //  console.log("reached here of imageurl of type string");
   return next();
  }
  try {
    
    
    const file = req.files && (req.files.ImageFile || req.files.ImageUrl);

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "File not provided",
      });
    }
    // console.log("req.files:", req.files);
    // console.log("req.body:", req.body);
    // console.log("here is the file : ",file)
    const supportedfile = ["jpg", "png", "jpeg","avif"];
    const type = file.name.split(".")[1].toLowerCase();
    console.log("here is the type : ",type);
    console.log("file is supported",filenotsupported(type, supportedfile));
    if (!filenotsupported(type, supportedfile)) {
     return  res.json({
        success: false,
        message: "File not supported",
      });
    }

    // upload to cloudinary

    const response = await uploadtocloudinary(file, "Eomm Admin Data");
    
    // console.log("this is response for imageurl " + response.secure_url);

    // res.json({
    //   success: true,
    //   imageUrl: response.secure_url,
    //   message: "File successfully uploaded into cloudinary",
    // });

    req.Imageurl=response.secure_url;
    next();

  } catch (error) {
    res.json({
        message:"something went wrong while uploading image",
        Error:error,
        success: false
    })
    console.log("Something went wrong " + error);
  }
};

function filenotsupported(type, support) {
  return support.includes(type);
}

async function uploadtocloudinary(file, folderName) {
  const options = { folder: folderName };
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}
