const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailySchema = new Schema({
  profit: {
    type: Number,
    default: 0,
  },
  cost: {
    type: Number,
    default: 0,
  },
  date: {
    type: Object,
  },
});

module.exports = Daily = mongoose.model("Daily", dailySchema);
