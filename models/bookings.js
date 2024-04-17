const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  hour: String,
  price: Number,
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
