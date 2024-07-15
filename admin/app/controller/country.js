const { AdminModel } = require("../../core/db/admin");
const { countryModel } = require("../../core/db/country");
const { groupModel } = require("../../core/db/group");
const {
  admincreatecountryModel,
  admincreategroupModel,
  updatecountryModel,
} = require("../model/country");

const admincreatecountryController = async (req, res, next) => {
  const { name, flag, continent, note, adminid, additional_note } = req.body;
  try {
    const data = {
      name,
      flag,
      continent,
      note,
      adminid,
      additional_note,
    };
    let trainee = await admincreatecountryModel(data, res);
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
const adminupdatecountryController = async (req, res, next) => {
  const { name, flag, continent, note, adminid, countryid } = req.body;
  try {
    const data = {
      name,
      flag,
      continent,
      note,
      adminid,
      countryid,
    };
    let trainee = await updatecountryModel(data, res);
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

const adminretrievesinglecountryController = async (req, res, next) => {
  try {
    const { countryid } = req.params;
    let trainee = await countryModel.findById(countryid).populate({
      path: "createdBy editedBy",
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
    handleError(error.message)(res);
  }
};
const admindeletecountryController = async (req, res, next) => {
  try {
    const { countryid } = req.body;
    console.log("cpoimutid", countryid);
    let trainee = await countryModel.findByIdAndDelete(countryid);
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

const adminretrievecountryController = async (req, res, next) => {
  try {
    const page = req.body.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    let trainee = await countryModel
      .find()
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

//group
const admincreategroupController = async (req, res, next) => {
  const { name, teamleader } = req.body;
  try {
    const groupname = name.toLowerCase();
    const group = await groupModel.findOne({ name: groupname });
    if (group) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "group already exist",
      });
    }
    //check if teamleader exist
    const customer = await AdminModel.findById(teamleader);
    if (!customer) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "team leader dont exist",
      });
    }
    const data = {
      groupname,
      teamleader,
    };
    let trainee = await admincreategroupModel(data, res);
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

const adminretrievegroupController = async (req, res, next) => {
  try {
    let trainee = await groupModel.find().populate({
      path: "createdBy editedBy",
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
    handleError(error.message)(res);
  }
};

module.exports = {
  adminretrievecountryController,
  admincreatecountryController,
  adminupdatecountryController,
  adminretrievesinglecountryController,
  admindeletecountryController,
  adminretrievegroupController,
  admincreategroupController,
};
