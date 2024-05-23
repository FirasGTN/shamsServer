const User = require("../../../models/Users");
const Daily = require("../../../models/Daily");
const Monthly = require("../../../models/Monthly");
const Yearly = require("../../../models/Yearly");

module.exports = async (req, res) => {
  let { userid, NCost } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userid },
      { $push: { cost: NCost } },
      { new: true }
    );
    const dailyfilterdate = {
      year: NCost.date.year,
      month: NCost.date.month,
      day: NCost.date.day,
    };

    const daily = await Daily.findOneAndUpdate(
      { date: dailyfilterdate },
      { $inc: { cost: NCost.price } },
      { new: true }
    );
    if (!daily) {
      const newDaily = new Daily({
        cost: NCost.price,
        date: dailyfilterdate,
      });
      await newDaily.save();
    }

    const monthfilterdate = {
      year: NCost.date.year,
      month: NCost.date.month,
    };

    const monthly = await Monthly.findOneAndUpdate(
      { date: monthfilterdate },
      { $inc: { cost: NCost.price } },
      { new: true }
    );
    if (!monthly) {
      const newMonthly = new Monthly({
        cost: NCost.price,
        date: monthfilterdate,
      });
      await newMonthly.save();
    }

    const yearfilterdate = {
      year: NCost.date.year,
    };
    const yearly = await Yearly.findOneAndUpdate(
      { date: yearfilterdate },
      { $inc: { cost: NCost.price } },
      { new: true }
    );
    if (!yearly) {
      const newYearly = new Yearly({
        cost: NCost.price,
        date: yearfilterdate,
      });
      await newYearly.save();
    }
    return res.status(200).json({
      status: true,
      message: "Cost added succesfully",
    });
  } catch (error) {
    if (error) throw error;
  }
};
