const Booking = require('../models/booking.model.js');
exports.getBooking = (req, res)=>{
    Booking.find()  
        .exec((err, result) => {
            res.status(200).json({
                msg: "Search OK",
                data: result
            });
        });
};

exports.getBookingById = (req, res)=>{
    Booking.findById(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "Search OK",
                data: result
            });
        });
}

exports.getBookingByName = async (req, res) =>{
    Booking.find({
      Name: new RegExp(req.params.name)
  }) // { name: /xxxx/}
  .exec((err, result) => {
      res.status(200).json({
          msg: "Search OK",
          data: result
      });
  });
  }

exports.createBooking = async (req, res)=>{
  try {
    let booking = new Booking({
      name: req.body.name,
      price: req.body.price,
      contract: req.body.contract,
      room_number: req.body.room_number
    });
    let createdBooking = await booking.save();
    res.status(200).json({
      msg: "App a booking complete.",
      data: createdBooking
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error
    });
  }
}

exports.updateBooking = (req, res) => {
  let booking = {  //ข้อมูลใหม่
    name: req.body.name,
    price: req.body.price,
    contract: req.body.contract,
    room_number: req.body.room_number
};
Booking.findByIdAndUpdate(req.params.id, booking)  //ระบุทั้ง id ที่ต้องการแก้ และข้อมูลใหม่
    .exec((err, result) => {
        // findById อีกครั้งเพื่อเอา data ใหม่
        Booking.findById(req.params.id)
            .exec((err, result) => {
                res.status(200).json({
                    msg: "OK",
                    data: result
                });
            });
    });
}

exports.deleteBookingById = async (req, res) =>{
    Booking.findByIdAndDelete(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "Delete OK"
            });
        });
}
