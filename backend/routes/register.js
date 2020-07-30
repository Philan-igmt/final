const express = require("express");
const router = express.Router();

// importing the model
const UserForm = require("../models/Register");

// to create a form
router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new UserForm({ username, password });

  newUser
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.json("error " + err));
});

module.exports = router;
