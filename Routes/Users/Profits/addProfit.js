const User = require("../../../models/Users");

module.exports = async (req, res) => {
  try {
    const { userid, amount, date, description, tag } = req.body;

    // Validate input
    if (!amount || !date || !description || !tag) {
      return res.status(400).json("Please include all fields");
    }

    // Find the user by ID
    const user = await User.findOne({ _id: userid });
    if (!user) {
      return res.status(404).json("User not found");
    }

    // Create a new profit object
    const newProfit = {
      tag,
      description,
      amount,
      date: new Date(date), // Ensure date is in Date format
    };

    // Add the new profit to the user's profits array
    user.profits.push(newProfit);

    // Save the user document to update the profits array
    await user.save();

    res.status(201).json("Profit added with successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
};
