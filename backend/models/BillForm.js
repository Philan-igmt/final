const mongoose = require("mongoose");

const BillSchema = mongoose.Schema({
  info: {
    type: Object,
    required: true,
  },
  // cart: {
  //   type: Object,
  //   required: true,
  // },
  // street_address: {
  //   type: String,
  //   required: true,
  // },
  // town: {
  //   type: String,
  //   required: true,
  // },
  // province: {
  //   type: String,
  //   required: true,
  // },
  // zip_code: {
  //   type: Number,
  //   required: true,
  // },
  // phone_number: {
  //   type: Number,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("Client_info", BillSchema);
