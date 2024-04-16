var express = require("express");
var router = express.Router();

const Trip = require("../models/trips");

router.post("/find", (req, res) => {
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
  }).then((tripData) => {
    const results = [];
    for (let i = 0; i < tripData.length; i++) {
      let dateString = tripData[i].date;
      let dateOnly = dateString.toISOString().split("T")[0];
      if (dateOnly === req.body.date) {
        results.push(tripData[i]);
      }
    }
    res.json({ results: results });
  });
});

module.exports = router;
