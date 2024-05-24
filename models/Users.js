const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  count: {
    type: String,
  },
  username: {
    type: String,
    required: [true, "the field of username is required"],
  },
  password: {
    type: String,
    required: [true, "the field of password is required"],
  },
  imgurl: {
    type: String,
  },
  bgurl: {
    type: String,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  profits: {
    type: Array,
    default: [],
  },
  costs: {
    type: Array,
    default: [],
  },
});

module.exports = Users = mongoose.model("Users", usersSchema);
