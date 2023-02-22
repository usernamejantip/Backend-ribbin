const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: { type: String, require: true },
    price: Number,
    contract: { type: String, require: true },
    room_number: Number,
},{ timestamps: true } );

module.exports = mongoose.model("Booking", bookingSchema); 