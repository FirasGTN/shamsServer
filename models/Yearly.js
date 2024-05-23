const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yearlySchema = new Schema({
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

module.exports = Yearly = mongoose.model("Yearly", yearlySchema);
