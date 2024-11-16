const { lineupModel } = require("../../core/db/lineup");
const { lineupreviewModel } = require("../core/db/review");
const { retrieveallLineupReviewmodel } = require("../model/review");
const { handleError } = require("../../core/utils");

const adminretrievereviewlineupController = async (req, res, next) => {
  const { company, location, email } = req.body;
  try {
    const userEmail = email.toLowerCase();
    const lineup = await lineupModel.findOne({
      company,
      location,
      email: userEmail,
    });
    if (!lineup) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: " linedup dont exist",
      });
    }
    const lineupid = lineup._id;
    const review = await lineupreviewModel.findOne({ lineupid });
    const reviewid = review._id;
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: " linedup",
      data: reviewid,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const admincreatereviewlineupController = async (req, res, next) => {
  const { status, remark, rating, lineupid, adminid } = req.body;
  try {
    const checkreview = await lineupreviewModel.findOne({ lineupid })
    if (checkreview) {
      await lineupreviewModel.updateOne({ lineupid }, {
        $set:{ adminid,
          status,
          remark,
          rating,}
      })
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "review updated",
      });
    }
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
    return handleError(error.message)(res);
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
    return handleError(error.message)(res);
  }
};
const admindeletereviewlineupController = async (req, res, next) => {
  const { reviewid } = req.body;
  try {
    console.log("rev", reviewid);
    const form = await lineupreviewModel.findByIdAndDelete(reviewid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: form,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
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
    return handleError(error.message)(res);
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
        path: "adminid",
        select: "basic_info.firstname basic_info.lastname basic_info.email",
      })
      .populate({
        path: "lineupid",
        populate: [
          // { path: "company", model: "company", select: "name" }, // Populate company inside lineupid
          {
            path: "adminid",
            model: "Admin",
            select: "basic_info.firstname basic_info.lastname basic_info.email",
          }, // Populate adminid inside lineupid
          // { path: "location", model: "location", select: "name" }, // Populate location inside lineupid
        ],
      })
      .skip(skip) // skip documents
      .limit(limit);
    // const data = {skip,limit}
    //   let trainee = await retrieveallLineupReviewmodel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
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
