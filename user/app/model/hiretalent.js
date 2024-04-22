const { contactusModel } = require("../../core/db/contactus");
const { findjobModel } = require("../../core/db/find.work");
const { hiretalentModel } = require("../../core/db/hire.talent");

const userhiretalentModel = async (data, res) => {
  try {
    const {
      email,
      name,
      phone,
      scheduledate,
      proposaltype,
      additionalmessage,
    } = data;

    const form = await new hiretalentModel({
      email,
      name,
      phone,
      scheduledate,
      proposaltype,
      additionalmessage,
    });
    const productDetails = await form.save();

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const userfindjobModel = async (data, res) => {
  try {
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
    } = data;

    const form = await new findjobModel({
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
    });
    const productDetails = await form.save();

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const contactmodel = async (data, res) => {
  try {
    const { enquiry, message, phone, email, name } = data;
    const contactus = await new contactusModel({
      enquiry,
      message,
      phone,
      email,
      name,
    });
    await contactus.save();
    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
module.exports = {
  userhiretalentModel,
  userfindjobModel,  contactmodel
};
