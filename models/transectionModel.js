const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: [true, "amount is required"],
  },
  type: {
    type: String,
    required: [true, "type is required"],
  },
  category: {
    type: String,
    required: [true, "please specify the category"],
  },
  refrence: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: [true, "Please specify the date"],
  },
});

const transectionModel = mongoose.model("transections", transectionSchema);
module.exports = transectionModel;
