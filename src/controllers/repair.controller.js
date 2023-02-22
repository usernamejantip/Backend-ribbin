const Repair = require('../models/repair.model.js');

exports.getRepair = (req, res)=>{
  Repair.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "Search OK",
                data: result
            });
        });
};

exports.getRepairById = (req, res)=>{
  Repair.findById(req.params.id)
  .exec((err, result) => {
      res.status(200).json({
          msg: "Search OK",
          data: result
      });
  });
}

exports.createRepair = async (req, res)=>{
  try {
    let repair = new Repair({
      date: req.body.date,
      room_number: req.body.room_number,
      equipment: req.body.equipment,
      note: req.body.note,
      status: req.body.status,
    });
    let createdRepair = await repair.save();
    res.status(200).json({
      msg: "App a Repair complete.",
      data: createdRepair
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error
    });
  }
}

exports.updateRepair = (req, res) => {
  let repair = {  //ข้อมูลใหม่
      date: req.body.date,
      room_number: req.body.room_number,
      equipment: req.body.equipment,
      note: req.body.note,
      status: req.body.status,
};
Repair.findByIdAndUpdate(req.params.id, repair)  //ระบุทั้ง id ที่ต้องการแก้ และข้อมูลใหม่
    .exec((err, result) => {
        // findById อีกครั้งเพื่อเอา data ใหม่
        Repair.findById(req.params.id)
            .exec((err, result) => {
                res.status(200).json({
                    msg: "OK",
                    data: result
                });
            });
    });
}

exports.deleteRepairById = async (req, res) =>{
  Repair.findByIdAndDelete(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "Delete OK"
            });
        });
}
