const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//importing the model
const Register = require("../models/Register");
router.use(cors());

// //creating a new user
router.post("/", async (req, res) => {
  const RegisterUser = {
    first_name: req.body.first_name,
    email: req.body.email,
    password: req.body.password,
  };
  Register.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          RegisterUser.password = hash;
          Register.create(RegisterUser)
            .then((user) => {
              res.json({ status: user.email + "user is now registed" });
            })
            .catch((err) => {
              res.send(err);
            });
        });
      } else {
        res.json({ err: "user is already registered" });
      }
    })
    .catch((err) => {
      res.send("err" + err);
    });
});

module.exports = router;
