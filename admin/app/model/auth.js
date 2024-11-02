const { sendEmail } = require("../../../helper/email");
const { AdminModel } = require("../../core/db/admin");
const { create_admin_token } = require("../../core/utils");

const adminSignupModel = async (data, res) => {
  try {
    const {
      userEmail,
      address,
      photo,
      phone,
      dob,
      lastname,
      firstname,
      Harshpassword,
      teamleader,
      status,
      role,
      nationality,
      state,
      city,
      gender,
      middlename,  recruiter_active  , maritalstatus
    } = data;
    const form = await new AdminModel({
      basic_info: {
        email: userEmail,
        password: Harshpassword,
        photo,
        phone,
        dob,
        lastname,
        firstname,
        middlename,
        gender, maritalstatus
      },
      address_details: { nationality, state, city, address },
      administrative: {  status, role },
      recruiter: { teamleader , recruiter_active },
    });

    const userDetails = await form.save();
    // const token = create_admin_token(userDetails._id);

    const userData = {
      id: userDetails._id,
      email: userDetails.basic_info.email,
      // token,
    };

    return userData;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
};

const adminLoginModel = async (data, res) => {
  try {
    const { userEmail } = data;
    const userDetails = await AdminModel.findOne({ 'basic_info.email': userEmail });
    const tokenparams = {adminid : userDetails._id , role: userDetails.administrative.role}
    const token = create_admin_token(tokenparams);
    const userData = {
      id: userDetails._id,
      name: userDetails.name,
      email: userDetails.email,
      token,
    };

    return userData;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  adminSignupModel,
  adminLoginModel,
};
