const User = require("../../../models/Users");
const Daily = require("../../../models/Daily");
const Monthly = require("../../../models/Monthly");
const Yearly = require("../../../models/Yearly");

module.exports = async (req, res) => {
  let { userid, NProfit } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userid },
      { $push: { profit: NProfit } },
      { new: true }
    );

    const dailyfilterdate = {
      year: NProfit.date.year,
      month: NProfit.date.month,
      day: NProfit.date.day,
    };

    const daily = await Daily.findOneAndUpdate(
      { date: dailyfilterdate },
      { $inc: { profit: NProfit.price } },
      { new: true }
    );
    if (!daily) {
      const newDaily = new Daily({
        profit: NProfit.price,
        date: dailyfilterdate,
      });
      await newDaily.save();
    }

    const monthfilterdate = {
      year: NProfit.date.year,
      month: NProfit.date.month,
    };

    const monthly = await Monthly.findOneAndUpdate(
      { date: monthfilterdate },
      { $inc: { profit: NProfit.price } },
      { new: true }
    );
    if (!monthly) {
      const newMonthly = new Monthly({
        profit: NProfit.price,
        date: monthfilterdate,
      });
      await newMonthly.save();
    }

    const yearfilterdate = {
      year: NProfit.date.year,
    };
    const yearly = await Yearly.findOneAndUpdate(
      { date: yearfilterdate },
      { $inc: { profit: NProfit.price } },
      { new: true }
    );
    if (!yearly) {
      const newYearly = new Yearly({
        profit: NProfit.price,
        date: yearfilterdate,
      });
      await newYearly.save();
    }

    return res.status(200).json({
      status: true,
      message: "Profit added succesfully",
    });
  } catch (error) {
    if (error) throw error;
  }
};
