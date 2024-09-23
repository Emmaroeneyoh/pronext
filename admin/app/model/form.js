const { formModel } = require("../../core/db/form");

const admincreaterecruitformModel = async (data, res) => {
  try {
    const {
      course,
      city,
      dateOfBirth,
      phoneNumber,
      location,
      company,
      email,
      fullName,
      name,
      gender,
      otterFields,
      currentLocation,
      maritalStatus,
      educationalQualification,
      remark,
      resume,
      bpoAccountAndExperience,
      adminid,
    } = data;

    const form = await new formModel({
      course,
      city,
      dateOfBirth,
      phoneNumber,
      location,
      company,
      email,
      fullName,
      name,
      gender,
      otterFields,
      currentLocation,
      maritalStatus,
      educationalQualification,
      remark,
      resume,
      bpoAccountAndExperience,
      adminid,
    });
    const productDetails = await form.save();

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const updaterecruitformModel = async (data, res) => {
  try {
    const {
      course,
      city,
      dateOfBirth,
      phoneNumber,
      location,
      company,
      email,
      fullName,
      name,
      gender,
      otterFields,
      currentLocation,
      maritalStatus,
      educationalQualification,
      remark,
      resume,
      bpoAccountAndExperience,
      adminid,
      formid,
    } = data;
    const form = await formModel.findByIdAndUpdate(formid, {
      $set: {
        course,
        city,
        dateOfBirth,
        phoneNumber,
        location,
        company,
        email,
        fullName,
        name,
        gender,
        otterFields,
        currentLocation,
        maritalStatus,
        educationalQualification,
        remark,
        resume,
        bpoAccountAndExperience,
        adminid
      },
    });
    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};


module.exports = {
  admincreaterecruitformModel,
  updaterecruitformModel,
};
