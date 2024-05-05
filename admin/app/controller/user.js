const { contactusModel } = require("../../../user/core/db/contactus");
const { findjobModel } = require("../../../user/core/db/find.work");
const { hiretalentModel } = require("../../../user/core/db/hire.talent");
const { handleError } = require("../../core/utils");
const { adminretrieveformsmodel, adminupdateformstatusmodel } = require("../model/user");
// const moment = require("moment");

const adminretrievesinglehiretalentController = async (req, res, next) => {
  const { formid } = req.params;
  try {
    let trainee = await hiretalentModel.findById(formid);
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
const admindeletehiremeController = async (req, res, next) => {
  const { formid } = req.body;
  try {
    let trainee = await hiretalentModel.findByIdAndDelete(formid);
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
const adminretrieveallhiretalentController = async (req, res, next) => {
  try {
    let trainee = await hiretalentModel.find();
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
const adminretrievesinglefindjobController = async (req, res, next) => {
  const { formid } = req.params;
  try {
    let trainee = await findjobModel.findById(formid);
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
const admindeletefindjobController = async (req, res, next) => {
  const { formid } = req.body;
  try {
    let trainee = await findjobModel.findByIdAndDelete(formid);
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
const adminretrieveallfindjobController = async (req, res, next) => {
  try {
    let trainee = await findjobModel.find();
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

const adminretrieveformsController = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    const { type, status } = req.body;
    const date = req.query.date;
    var query = { $and: [] };

    if (date && date != "") {
      query.$and.push({ createdAt: date });
    }
    if (!type || type.length == 0) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "type must not be an empty array",
      });
    }
    if (status && status.length > 0) {
      query.$and.push({ status: { $in: status } });
    }
    const data = { page, limit, skip, type, query };
    let obj = await adminretrieveformsmodel(data, res);
    if (!obj.status) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: obj.message,
      });
    }
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: obj.totaldata,
      pagination: {
        limit,
        page,
      },
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminretrievesingleformController = async (req, res, next) => {
  const { formid } = req.params;
  try {
    const type = req.query.type;
    if (type == "findjob") {
      let trainee = await findjobModel.findById(formid);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } else if (type == "hiretalent") {
      let trainee = await hiretalentModel.findById(formid);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } else if (type == "contactus") {
      let trainee = await contactusModel.findById(formid);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } else {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "invalid form type",
      });
    }
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrieveupdateformstatusController = async (req, res, next) => {
  try {
    const { formid, status, type } = req.body;
    const data = { formid, status, type }
   console.log(type)
    if (type != "findjob" && type != "contactus" && type != "hiretalent") {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "invalid form type",
      });
    }
    const updateform = await adminupdateformstatusmodel(data, res)
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "form status updated",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
module.exports = {
  adminretrievesinglehiretalentController,
  adminretrieveallhiretalentController,
  admindeletehiremeController,
  adminretrieveallfindjobController,
  admindeletefindjobController,
  adminretrievesinglefindjobController,
  adminretrieveformsController,
  adminretrievesingleformController,  adminretrieveupdateformstatusController
};
