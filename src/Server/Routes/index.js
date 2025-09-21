const UploadtoDb = require('./UploadtoDb');
const Products=require("./Products");
const singleproduct=require("./Singleprodu");
const {imageUpload} =require("../MiddleWares/ImageUpload");
const updateProduct=require("./UpdataProduct");
const DeleteProduct=require("./DeleteProduct");
const AuthMiddleware=require("../MiddleWares/AuthMiddleware");
const signin=require("./Signin");
const signup=require("./Signup");

const express=require("express");
const router=express.Router();
router.use(express.json());
router.post("/UploadtoDb",AuthMiddleware,imageUpload,UploadtoDb);
router.get("/products",Products);
router.get("/products/:id",singleproduct);
router.put("/product/update",AuthMiddleware,imageUpload,updateProduct);
router.delete("/product/delete",AuthMiddleware,DeleteProduct);
router.post("/Admin/signin",signin);
router.post("/Admin/signup",signup);

module.exports= 
    router;



