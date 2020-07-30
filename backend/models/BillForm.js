const mongoose = require("mongoose");

const BillSchema = mongoose.Schema({
  info: {
    type: Object,
    required: true,
  },
  cart: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Client_info", BillSchema);
