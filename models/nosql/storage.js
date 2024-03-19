
const mongoose = require("mongoose");

const storageScheme = new mongoose.Schema(
    {
      url: {
        type: String
      },
      filename: {
        type: Number,
      },
     },
    {
       timestamps: true,
       versionKey: false
    }
);


//! ------- EXPORTAMOS
module.exports = mongoose.model("storages", storageScheme); 