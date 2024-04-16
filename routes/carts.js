var express = require("express");
var router = express.Router();

const Cart = require("../models/carts");

router.get("/", (req, res) => {
  Cart.find().then((cartData) => res.json({ cartData }));
});

module.exports = router;
