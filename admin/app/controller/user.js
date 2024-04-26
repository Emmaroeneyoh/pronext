const { findjobModel } = require("../../../user/core/db/find.work");
const { hiretalentModel } = require("../../../user/core/db/hire.talent");
const { handleError } = require("../../core/utils");
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
    const skip = (page - 1) * limit;
    const type = req.query.type;
    const status = req.query.status;
    const date = (req.query.date);
    var query = { $and: [] };

    if (status != "") {
      query.$and.push({ status: status });
    }

    if (date != "") {
      const ndate = `${date}+00:00`
      query.$and.push({ createdAt : ndate});
    }
    if (type == "findjob") {
      let trainee = await findjobModel.find(query).skip(skip).limit(limit);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
        pagination: {
          page: page,
          limit: 15,
          total: trainee.length, // This is not the total count, it's the count of items on this page
        },
      });
    } else if (type == "hiretalent") {
      let trainee = await hiretalentModel.find().skip(skip).limit(limit);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
        pagination: {
          page: page,
          limit: 15,
          total: trainee.length, // This is not the total count, it's the count of items on this page
        },
      });
    } else {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "form type invalid",
      });
    }
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
module.exports = {
  adminretrievesinglehiretalentController,
  adminretrieveallhiretalentController,
  admindeletehiremeController,
  adminretrieveallfindjobController,
  admindeletefindjobController,
  adminretrievesinglefindjobController,
  adminretrieveformsController, adminretrievesingleformController
};
