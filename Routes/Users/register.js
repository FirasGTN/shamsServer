const User = require("../../models/Users");

module.exports = async (req, res) => {
  try {
    let { username, password } = req.body;
    let existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "Username already exists." });
    }

    const newUser = new User({
      username,
      password,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ success: true, message: "Account registered successfully." });
  } catch (error) {
    if (error.code) {
      return res.status(401).json({
        success: false,
        message: "failed for some reason try change the username and try again",
      });
    }
  }
};
