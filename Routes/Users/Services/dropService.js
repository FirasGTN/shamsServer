const Services = require("../../../models/Services");

module.exports = async (req, res) => {
  let { serviceId } = req.body;
  try {
    let service = await Services.findByIdAndDelete({ _id: serviceId });
    if (!service) {
      res.status(401).json({ status: false, message: "Service not found" });
    } else {
      res
        .status(200)
        .json({ status: true, message: "Service deleted succesfully" });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
