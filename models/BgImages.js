const mongoose = require("mongoose");

const BgImagesSchema = new mongoose.Schema({
  images: [String], // or the appropriate type for your image URLs
  // other fields
});

module.exports = mongoose.model("BgImages", BgImagesSchema);
