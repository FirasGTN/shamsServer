const Daily = require("../../../models/Daily");

module.exports = async (req, res) => {
  try {
    let daily = await Daily.find();
    if (!daily) {
      return res.status(404).json({ message: "No Profit was found" });
    } else {
      return res.status(200).json({ daily });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
