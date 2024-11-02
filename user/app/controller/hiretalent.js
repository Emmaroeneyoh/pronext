const { contactusModel } = require("../../core/db/contactus");
const { findjobModel } = require("../../core/db/find.work");
const { hiretalentModel } = require("../../core/db/hire.talent");
const {
  userhiretalentModel,
  userfindjobModel,
  contactmodel,
} = require("../model/hiretalent");

const userhiretalentController = async (req, res, next) => {
  const { email, name, phone, scheduledate, proposaltype, additionalmessage , createdAt} =
    req.body;
  try {
    
    const data = {
      email,
      name,
      phone,
      scheduledate,
      proposaltype,
      additionalmessage, createdAt
    };
    let trainee = await userhiretalentModel(data, res);
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
const userfindjobController = async (req, res, next) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    educationalaccount,
    educationalqualification,
    location,
    bpoexperience,
    site,
    scheduledate,
    file,
    type,
    gender,
    dob, createdAt
  } = req.body;
  try {
    const data = {
      firstname,
      lastname,
      email,
      phone,
      educationalaccount,
      educationalqualification,
      location,
      bpoexperience,
      site,
      scheduledate,
      file,
      type,
      gender,
      dob, createdAt
    };
    let trainee = await userfindjobModel(data, res);
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

const contactuscontroller = async (req, res, next) => {
  try {
    const { enquiry, message, phone, email, name , createdAt} = req.body;

    const data = {
      enquiry,
      message,
      phone,
      email,
      name, createdAt
    };
    const contactadmin = await contactmodel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "form submitted",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

module.exports = {
  userhiretalentController,
  userfindjobController,contactuscontroller
};
