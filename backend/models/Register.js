const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  street_address: {
    type: String,
    required: true,
  },
  town: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  zip_code: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
});

module.export = mongoose.model("User_Register", RegisterSchema);
