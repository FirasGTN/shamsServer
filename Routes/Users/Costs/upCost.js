const User = require("../../../models/Users");

module.exports = async (req, res) => {
  let { userid, NProfit } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userid },
      { $push: { profit: NProfit } },
      { new: true }
    );
    return res.status(200).json({
      status: true,
      message: "Profit added succesfully",
    });
  } catch (error) {
    if (error) throw error;
  }
};
