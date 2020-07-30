const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.export = mongoose.model("UserRegister", RegisterSchema);
