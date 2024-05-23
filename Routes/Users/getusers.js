const Users = require("../../models/Users");

module.exports = async (req, res) => {
  try {
    let users = await Users.find();
    if (!users) {
      return res.status(404).json({ message: "No user was found" });
    } else {
      return res.status(200).json({ users });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
