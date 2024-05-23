const Services = require("../../../models/Services");

module.exports = async (req, res) => {
  let { tag, Nservices } = req.body;
  try {
    const updatedService = await Services.findOneAndUpdate(
      { tag: tag },
      { $push: { services: Nservices } },
      { new: true }
    );
    if (!updatedService) {
      const newService = new Services({
        tag,
        services : Nservices,
      });

      await newService.save();
    }
    // let existingservice = await Services.findOne({ service });
    // if (existingservice) {
    //   return res
    //     .status(401)
    //     .json({ success: false, message: "service already exist." });
    // }

    return res
      .status(201)
      .json({ success: true, message: "Service added successfully." });
  } catch (error) {
    if (error.code) {
      return res.status(401).json({
        success: false,
        message: "failed for some reason try change the username and try again",
      });
    }
  }
};
