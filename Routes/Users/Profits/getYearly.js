const Yearly = require("../../../models/Yearly");

module.exports = async (req, res) => {
  try {
    let yearly = await Yearly.find();
    if (!yearly) {
      return res.status(404).json({ message: "No Profit was found" });
    } else {
      return res.status(200).json({ yearly });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
