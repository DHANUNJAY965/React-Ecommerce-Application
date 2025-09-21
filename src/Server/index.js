const express=require('express');
const dbconnect=require('./Database/DB');
const app = express();
const cors=require('cors');
const fileupload = require("express-fileupload");
const router=require("./Routes/index");
const PORT=process.env.PORT || 3004;
const cloudinaryDb=require("./Database/CloudinaryDb");
require("dotenv").config();


app.use(cors());
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));
dbconnect();
cloudinaryDb();
app.use("/api/v1", router);


app.get("/",(req,res)=>{
    res.json({
        message:"Ecomm Server"
    })
})


app.listen(PORT,  ()=>{
 
    console.log(`servre is listening on port ${PORT}`);
})



