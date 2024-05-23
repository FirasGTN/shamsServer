const Services = require("../../../models/Services");

module.exports = async (req, res) => {
  
  try {
    let service = await Services.find();
    if (!service) throw new Error("Service not found!");
    return res.status(200).json({ success: true, data: service });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
