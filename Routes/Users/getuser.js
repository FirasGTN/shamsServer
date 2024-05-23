const Users = require("../../models/Users");

module.exports = async (req, res) => {
  let { id } = req.params;
  try {
    let user = await Users.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "No user was found" });
    } else {
      return res.status(200).json({ user });
    }
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};
