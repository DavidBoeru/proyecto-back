
const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
    {
      name: {
        type: String
      },
      age: {
        type: Number,
      },
      email: {
        type: String,
        unique: true
      },
      password: {
        type: String
      },
      role: {
        type: ["user", "admin", "superadmin"],
        default: "user"
       },
     },
    {
       timestamps: true,
       versionKey: false
    }
);


//! ------- EXPORTAMOS
module.exports = mongoose.model("users", UserScheme); 