const { lineupModel } = require("../../core/db/lineup");
const { lineupreviewModel } = require("../core/db/review");

const adminretrievereviewlineupController = async (req, res, next) => {
  const { country, location, email } = req.body;
  try {
    let trainee = await lineupModel.findOne({ country, location, email });

    if (!trainee) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "candidate dont exist",
      });
    }
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const admincreatereviewlineupController = async (req, res, next) => {
  const { status, remark, rating, lineupid, adminid } = req.body;
  try {
    let trainee = await new lineupreviewModel({
      adminid,
      status,
      remark,
      rating,
      lineupid,
    });
    const form = await trainee.save();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: form,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminupdatereviewlineupController = async (req, res, next) => {
  const { status, remark, rating, lineupid, reviewid } = req.body;
  try {
    const form = await lineupreviewModel.findByIdAndUpdate(reviewid, {
      $set: {
        status,
        remark,
        rating,
      },
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: form,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const admindeletereviewlineupController = async (req, res, next) => {
  const { reviewid } = req.params;
    try {
      console.log('rev' , reviewid)
    const form = await lineupreviewModel.findByIdAndDelete(reviewid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: form,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievesinglereviewlineupController = async (req, res, next) => {
  const { reviewid } = req.params;
  try {
    const form = await lineupreviewModel
      .findById(reviewid)
      .populate({ path: "lineupid adminid" });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: form,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievesreviewlineupController = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    let trainee = await lineupreviewModel
      .find()
      .populate({
        path: "lineupid",
      })
      .skip(skip) // skip documents
      .limit(limit);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  adminupdatereviewlineupController,
  admincreatereviewlineupController,
  adminretrievereviewlineupController,
  adminretrievesreviewlineupController,
  adminretrievesinglereviewlineupController,
  admindeletereviewlineupController,
};