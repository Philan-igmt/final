const express = require("express");
const router = express.Router();

// importing the model
const BillForm = require("../models/BillForm");

// to create a form
router.post("/", async (req, res) => {
  const user = new BillForm({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street_address: req.body.street_address,
    town: req.body.town,
    province: req.body.province,
    zip_code: req.body.zip_code,
    phone_number: req.body.phone_number,
  });
  try {
    const User = await user.save();
    res.json(User);
  } catch (error) {
    res.json({ message: err });
  }
});

module.exports = router;
