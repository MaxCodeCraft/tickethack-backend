var express = require("express");
var router = express.Router();

const Booking = require("../models/bookings");

router.get("/", (req, res) => {
  Booking.find().then((bookingData) => res.json({ bookingData }));
});

router.post("/add", (req, res) => {
  const newBooking = new Booking({
    departure: req.body.departure,
    arrival: req.body.arrival,
    hour: req.body.hour,
    price: req.body.price,
  });
  newBooking.save().then((data) => {
    res.json({ result: true });
    console.log(data);
  });
});

module.exports = router;
