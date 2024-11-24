const { AdminModel } = require("../../core/db/admin");
const bcrypt = require("bcrypt");
const { groupModel } = require("../../core/db/group");

const adminupdateprofileController = async (req, res, next) => {
  const {
    lastname,
    firstname,
    middlename,
    email,
    maritalstatus,
    gender,
    dob,
    phone,
    adminid,
  } = req.body;
  const adminEmail = email.toLowerCase();
  try {
    const admin = await AdminModel.findOne({ email: adminEmail });
    if (admin) {
      if (user._id != adminid) {
        return res.status(200).json({
          status_code: 400,
          status: true,
          message: "email already exist",
          error: "email already exist",
        });
      }
    }

    await AdminModel.findByIdAndUpdate(adminid, {
      $set: {
        "basic_info.firstname": firstname,
        "basic_info.lastname": lastname,
        "basic_info.middlename": middlename,
        "basic_info.email": adminEmail,
        "basic_info.gender": gender,
        "basic_info.dob": dob,
        "basic_info.phone": phone,
        "basic_info.maritalstatus": maritalstatus,
      },
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const adminupdateaddressController = async (req, res, next) => {
  const {
    address,
    state,
    city,
    nationality,

    adminid,
  } = req.body;
  try {
    await AdminModel.findByIdAndUpdate(adminid, {
      $set: {
        "address_details.state": state,
        "address_details.address": address,
        "address_details.city": city,
        "address_details.nationality": nationality,
      },
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminresetPassword = async (req, res, next) => {
  const { adminid, currentpassword, newpassword } = req.body;
  try {
    const customerDetails = await AdminModel.findById(adminid);

    const checkPassword = await bcrypt.compare(
      currentpassword,
      customerDetails.basic_info.password
    );
    if (!checkPassword) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect password",
        data: [],
        error: "incorrect password",
      });
    }
    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(newpassword, salt);
    await AdminModel.findByIdAndUpdate(adminid, {
      $set: {
        "basic_info.password": Harshpassword,
      },
    });

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const adminretrieveteams = async (req, res, next) => {
  const { adminid } = req.params
  try {
    const teams = await groupModel.find({teamleader:adminid});

    return res.status(200).json({
      status_code: 200,
      status: true,
        message: "login process successful",
      data:teams
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

module.exports = {
  adminresetPassword,
  adminupdateaddressController,
    adminupdateprofileController,
    adminretrieveteams
};
