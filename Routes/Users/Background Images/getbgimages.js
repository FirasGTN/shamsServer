const BgImages = require("../../../models/BgImages");

module.exports = async (req, res) => {
  try {
    let bgImages = await BgImages.find();
    let allimages = [];
    if (!bgImages) {
      return res.status(404).json({ message: "No image was found" });
    } else {
      bgImages.forEach((e) => e.images.forEach((i) => allimages.push(i)));
      return res.status(200).json(allimages);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
