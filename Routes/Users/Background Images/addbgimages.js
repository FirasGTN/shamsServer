const BgImages = require("../../../models/BgImages");

module.exports = async (req, res) => {
  try {
    // Assuming there is a single document you want to update
    let bgImageDoc = await BgImages.findOne();
    if (!req.body.imageUrl) {
      res.status(404).json("url invalid");
    }
    if (!bgImageDoc) {
      const images = new BgImages({
        images: req.body.imageUrl,
      });
      await images.save();
      return res.status(200).json("new album added");
    } else {
      bgImageDoc.images.push(req.body.imageUrl);
      await bgImageDoc.save();
      return res.status(200).json("Background Image Added");
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
