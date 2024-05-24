const User = require("../../../models/Users");

module.exports = async (req, res) => {
  try {
    const { userid, amount, date, description } = req.body;

    // Validate input
    if (!amount || !date || !description) {
      return res.status(400).json("Please include all fields");
    }

    // Find the user by ID
    const user = await User.findOne({ _id: userid });
    if (!user) {
      console.log("no user");
      return res.status(404).json("User not found");
    }

    // Create a new cost object
    const newCosts = {
      description,
      amount,
      date: new Date(date), // Ensure date is in Date format
    };

    // Add the new cost to the user's costs array
    user.costs.push(newCosts);

    // Save the user document to update the costs array
    await user.save();

    res.status(201).json("Expense added with successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
};
