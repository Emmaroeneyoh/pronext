const { locationModel } = require("../core/db/location");
const {
  updatelocationModel,
  admincreatelocationModel,
} = require("../model/location");

const admincreatelocationController = async (req, res, next) => {
  const {
    document,
    status,
    remark,
    address,
    city,
    state,
    phone,
    name,

    account,
    company,
    country,
    adminid,
  } = req.body;
  try {
    const data = {
      document,
      status,
      remark,
      address,
      city,
      state,
      name,
      account,
      company,
      country,
      adminid,
    };
    let trainee = await admincreatelocationModel(data, res);
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
const adminupdatelocationController = async (req, res, next) => {
  const {
    document,
    status,
    remark,
    address,
    city,
    state,

    name,
    account,
    company,
    country,
    adminid,
    locationid,
  } = req.body;
  try {
    const data = {
      document,
      status,
      remark,
      address,
      city,
      state,

      name,
      account,
      company,
      country,
      adminid,
      locationid,
    };
    let trainee = await updatelocationModel(data, res);
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

const adminretrievesinglelocationController = async (req, res, next) => {
  try {
    const { locationid } = req.params;
    let trainee = await locationModel.findById(locationid).populate({
      path: "createdBy editedBy country company",
      select: "basic_info.firstname basic_info.lastname name logo flag",
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
const admindeletelocationController = async (req, res, next) => {
  try {
    const { locationid } = req.body;
    console.log("cpoimutid", locationid);
    let trainee = await locationModel.findByIdAndDelete(locationid);
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

const adminretrievelocationController = async (req, res, next) => {
  try {
    const page = req.body.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    let trainee = await locationModel
      .find()
      .populate({
        path: "createdBy editedBy country company",
        select: "basic_info.firstname basic_info.lastname name logo flag",
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
  adminretrievelocationController,
  admincreatelocationController,
  adminupdatelocationController,
  adminretrievesinglelocationController,
  admindeletelocationController,
};
