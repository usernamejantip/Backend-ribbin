const express = require('express');
const app = express.Router();
const controller = require('../controllers/booking.controller')
const auth = require("../middleware/auth");

app.get("/", controller.getBooking);

app.get("/:id", controller.getBookingById);

app.get("/name/:name", controller.getBookingByName);

app.post("/", controller.createBooking);

app.put("/:id", controller.updateBooking);

app.delete("/:id", controller.deleteBookingById);

module.exports = app; 