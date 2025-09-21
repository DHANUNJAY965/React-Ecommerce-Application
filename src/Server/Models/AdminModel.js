const mongoose = require("mongoose");
// Create a Schema for Admin
const AdminSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
  },
  username:{
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
    default: 'user'
  }
});



// Create a model from the schema
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;