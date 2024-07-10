const cloudinary = require('cloudinary').v2;

require("dotenv").config();

const cloudinaryDb =()=>
{
    try{

        cloudinary.config({
            cloud_name:process.env.CloudName,
            api_key:process.env.Api_Key,
            api_secret:process.env.Api_Secret
        })
        console.log('Cloudinary connected successfully');
    }
    catch(error){
        console.log("error: " + error);

    }
}

module.exports = cloudinaryDb;