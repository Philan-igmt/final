const express = require("express");
const router = express.Router();

//importing the model
const Register = require("../models/Register");

//creating a new user
router.post("/", async (req, res) => {
  const Register = new Register({
    first_name: req.body.first_name,
    email: req.body.email,
    password: req.body.password,
    street_address: req.body.street_address,
    town: req.body.town,
    province: req.body.province,
    zip_code: req.body.zip_code,
    phone_number: req.body.phone_number,
  });
  try {
    const user = await User.save();
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
