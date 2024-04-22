const {
  userhiretalentModel,
  userfindjobModel,
  contactmodel,
} = require("../model/hiretalent");

const userhiretalentController = async (req, res, next) => {
  const { email, name, phone, scheduledate, proposaltype, additionalmessage } =
    req.body;
  try {
    const data = {
      email,
      name,
      phone,
      scheduledate,
      proposaltype,
      additionalmessage,
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
    handleError(error.message)(res);
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
    dob,
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
      dob,
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
    handleError(error.message)(res);
  }
};

const contactuscontroller = async (req, res, next) => {
  try {
    const { enquiry, message, phone, email, name } = req.body;

    const data = {
      enquiry,
      message,
      phone,
      email,
      name,
    };
    const contactadmin = await contactmodel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "form submitted",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  userhiretalentController,
  userfindjobController,contactuscontroller
};
