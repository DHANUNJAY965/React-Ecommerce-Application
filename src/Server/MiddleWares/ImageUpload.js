const cloudinary = require("cloudinary").v2;

exports.imageUpload = async (req, res, next) => {
    const {  ImageUrl, size } = req.body;

    // If ImageUrl is a string, move to the next middleware
    if (ImageUrl && typeof ImageUrl === 'string') {
        next();
        return;
    }
    console.log("Uploading image",req.files );

    try {
        const files = req.files && (Object.values(req.files) || req.files.ImageUrl);

        if (!files) {
            return res.status(400).json({
                success: false,
                message: "Files not provided",
            });
        }

        const fileArray = Array.isArray(files) ? files : [files];
        
        // Validate that the number of files matches the size provided by the user
        if (size && parseInt(size) !== fileArray.length) {
            return res.json({
                success: false,
                message: `The number of images provided (${fileArray.length}) does not match the size specified (${size}).`,
            });
        }

        const supportedfile = ["jpg", "png", "jpeg", "avif"];
        const urls = [];

        for (const file of fileArray) {
            const type = file.name.split(".")[1].toLowerCase();

            if (!filenotsupported(type, supportedfile)) {
                return res.status(400).json({
                    success: false,
                    message: "File not supported",
                });
            }

            // Upload each file to Cloudinary
            const response = await uploadtocloudinary(file, "Eomm Admin Data");
            urls.push({ url: response.secure_url });
        }
        console.log("the image urls are : ",urls);
        req.Imageurl = urls;
        next();

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong while uploading images",
            error: error.message,
            success: false
        });
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
