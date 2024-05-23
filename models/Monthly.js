const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonthlySchema = new Schema({
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

module.exports = Monthly = mongoose.model("Monthly", MonthlySchema);
