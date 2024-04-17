var express = require("express");
var router = express.Router();

const Cart = require("../models/carts");

router.get("/", (req, res) => {
  Cart.find().then((cartData) => res.json({ cartData }));
});

router.post("/add", (req, res) => {
  const newTrip = new Cart({
    departure: req.body.departure,
    arrival: req.body.arrival,
    hour: req.body.hour,
    price: req.body.price,
  });
  newTrip.save().then((data) => {
    res.json({ result: true });
    console.log(data);
  });
});

router.delete("/delete", (req, res) => {
  Cart.deleteOne({ _id: req.body.id }).then((data) => {
    console.log(data);
    res.json({ result: true });
  });
});

router.delete("/deleteall", (req, res) => {
  Cart.deleteMany().then((data) => {
    console.log(data);
    res.json({ result: true });
  });
});

module.exports = router;
