const express = require("express");
const router = express.Router();

// importing the model
const BillForm = require("../models/BillForm");

// to create a form
router.post("/", async (req, res) => {
  const user = new BillForm({
    info: req.body.info,
  });
  try {
    const User = await user.save();
    res.json(User);
  } catch (error) {
    res.json({ message: err });
  }
});

module.exports = router;
