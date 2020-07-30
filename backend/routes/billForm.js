const express = require("express");
const router = express.Router();

// importing the model
const BillForm = require("../models/BillForm");

// to create a form
router.post("/", async (req, res) => {
  const info = req.body.info;
  const cart = req.body.cart;

  const newInfo = new BillForm({ info, cart });

  newInfo
    .save()
    .then(() => res.json("information added"))
    .catch((err) => res.json("error " + err));
});

module.exports = router;
