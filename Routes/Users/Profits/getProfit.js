const Users = require("../../../models/Users");

module.exports = async (req, res) => {
  try {
    const userId = req.body.userId; // Assuming you have user information available in the request
    let user = await Users.findOne({ _id: userId });
    if (user && user.profits.length == 0) {
      return res.status(200).json(user.profits);
    } else {
      return res.status(401).json("No profit found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
