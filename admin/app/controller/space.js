const { spaceModel } = require("../../core/db/space");
const { handleError } = require("../../core/utils");

const admincreatespaceController = async (req, res, next) => {
  const {title, general, note, adminid } = req.body;
  try {
 
    const form = await new spaceModel({
     title,
      general,
      note,
      adminid,
    });
    const space = await form.save();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: space,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const adminupdatespaceController = async (req, res, next) => {
  const { title, general, note, adminid, spaceid } = req.body;
  try {
    const form = await spaceModel.findByIdAndUpdate(spaceid, {
      $set: {
        title,
        general,
        note,
        adminid,
      },
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminretrievesinglespaceController = async (req, res, next) => {
  try {
    const { spaceid } = req.params;
    let trainee = await spaceModel.findById(spaceid).populate({
      path: "adminid",
      select: "basic_info.firstname basic_info.lastname",
    });
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
const admindeletespaceController = async (req, res, next) => {
  try {
    const { spaceid } = req.body;
    let trainee = await spaceModel.findByIdAndDelete(spaceid);
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

const adminretrievespaceController = async (req, res, next) => {
  try {
    const { general } = req.query;
    const page = req.body.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    let trainee = await spaceModel
      .find({ general })
      .populate({
        path: "adminid",
        select: "basic_info.firstname basic_info.lastname"
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
    return handleError(error.message)(res);
  }
};

module.exports = {
  admindeletespaceController,
  adminretrievesinglespaceController,
  adminupdatespaceController,
  admincreatespaceController,
  adminretrievespaceController,
};
