const { formModel } = require("../../core/db/form");
const {
  admincreaterecruitformModel,
  updaterecruitformModel,
} = require("../model/form");

const admincreaterecruitformController = async (req, res, next) => {
  const {
    course,
    city,
    dateOfBirth,
    phoneNumber,
    location,
    company,
    email,
    fullname,
    name,
    gender,
    otterFields,
    currentLocation,
    maritalStatus,
    educationalQualification,
    expectedSalary,
    resume,
    bpoAccountAndExperience,
    adminid,
  } = req.body;
  try {
    const data = {
      course,
      city,
      dateOfBirth,
      phoneNumber,
      location,
      company,
      email,
      fullname,
      name,
      gender,
      otterFields,
      currentLocation,
      maritalStatus,
      educationalQualification,
      expectedSalary,
      resume,
      bpoAccountAndExperience,
      adminid,
    };

    let trainee = await admincreaterecruitformModel(data, res);
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
const adminupdaterecruitformController = async (req, res, next) => {
  const {
    course,
    city,
    dateOfBirth,
    phoneNumber,
    location,
    company,
    email,
    fullname,
    name,
    gender,
    otterFields,
    currentLocation,
    maritalStatus,
    educationalQualification,
    expectedSalary,
    resume,
    bpoAccountAndExperience,
    adminid,
    formid,
  } = req.body;
  try {
    const data = {
      course,
      city,
      dateOfBirth,
      phoneNumber,
      location,
      company,
      email,
      fullname,
      name,
      gender,
      otterFields,
      currentLocation,
      maritalStatus,
      educationalQualification,
      expectedSalary,
      resume,
      bpoAccountAndExperience,
      adminid, formid
    };
    let trainee = await updaterecruitformModel(data, res);
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

const adminretrievesinglerecruitformController = async (req, res, next) => {
  try {
      const { formid } = req.params;
      console.log('formid' , formid)
    let trainee = await formModel.findById(formid)
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

const adminretrieverecruitformController = async (req, res, next) => {
  try {
    const page = req.body.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    let trainee = await formModel
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

module.exports = {
  adminupdaterecruitformController,
  admincreaterecruitformController,
  adminretrievesinglerecruitformController,
  adminretrieverecruitformController,
};
