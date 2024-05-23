const Services = require("../../../models/Services");

module.exports = async (req, res) => {
  let { tag } = req.params;
  try {
    let service = await Services.findOne({ tag: tag });
    if (!service) console.log(ServiceOfProfit + " is not in the database.");
    else {
      return res.status(200).json({ success: true, data: service });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
