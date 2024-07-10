
const mongoose = require('mongoose');
require("dotenv").config();

const connect= async () =>{
   await mongoose.connect(process.env.DB_URL)
    .then(()=>{ console.log("db connected succesfully ")})
    .catch((e)=>
    {
        console.log("error connecting "+e);
    })
}
module.exports = connect;