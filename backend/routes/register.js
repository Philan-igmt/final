const express = require("express");
const router = express.Router();

//importing the model
const User = require("../models/Register");

// //creating a new user
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  //save to database
  try {
    const Userr = await user.save();
    res.json(Userr);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
