const Monthly = require("../../../models/Monthly");

module.exports = async (req, res) => {
  try {
    let monthly = await Monthly.find();
    if (!monthly) {
      return res.status(404).json({ message: "No Profit was found" });
    } else {
      return res.status(200).json({ monthly });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
