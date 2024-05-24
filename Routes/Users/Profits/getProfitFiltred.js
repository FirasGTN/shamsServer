const Users = require("../../../models/Users");

module.exports = async (req, res) => {
  try {
  let { userId } = req.params;
    const user = await Users.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Extract profits from the user object
    const { profits } = user;

    // Aggregate profits by day, month, and year
    const profitsByDay = aggregateProfits(profits, "day");
    const profitsByMonth = aggregateProfits(profits, "month");
    const profitsByYear = aggregateProfits(profits, "year");

    res.json({
      daily: profitsByDay,
      monthly: profitsByMonth,
      yearly: profitsByYear,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Function to aggregate profits by day, month, or year
const aggregateProfits = (profits, granularity) => {
  return profits.reduce((result, profit) => {
    const date = new Date(profit.date);

    let key;
    if (granularity === "day") {
      key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    } else if (granularity === "month") {
      key = `${date.getFullYear()}-${date.getMonth() + 1}`;
    } else if (granularity === "year") {
      key = `${date.getFullYear()}`;
    }

    if (!result[key]) {
      result[key] = {
        _id: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate(),
        },
        totalAmount: 0,
        count: 0,
      };
    }

    result[key].totalAmount += profit.amount;
    result[key].count++;

    return result;
  }, {});
};
