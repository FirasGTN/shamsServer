const User = require("../../../models/Users");

module.exports = async (req, res) => {
  let { userid, Nbgurl } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userid },
      { bgurl: Nbgurl },
      { new: true }
    );
    if (updatedUser) {
      return res.status(200).json({
        status: true,
        message: "background updated with succesfully",
      });
    }
  } catch (error) {
    if (error) throw error;
  }
};
