const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repairSchema = new Schema({
    date: { type: String, require: true },
    room_number: Number,
    equipment:{ type: String, require: true },
    note:{ type: String, require: true },
    status: { type: String, require: true }
},{ timestamps: true } );

module.exports = mongoose.model("Repair", repairSchema);
