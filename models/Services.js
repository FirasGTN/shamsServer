const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
  tag: {
    type: String,
    required: [true, "the field of tag is required"],
  },
  services : {
    type : Array,
    required: [true, "the field of service is required"],
  }
});

module.exports = Services = mongoose.model("Services", servicesSchema);
