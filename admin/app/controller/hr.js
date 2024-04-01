const { AdminModel } = require("../../core/db/admin");
const { adminupdateprofileModel } = require("../model/hr");

const adminretrieveusersController = async (req, res, next) => {
  try {
    let comment = await AdminModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "cart code generated",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievesingleuserController = async (req, res, next) => {
  try {
    const { staffid } = req.body;
    let comment = await AdminModel.findById(staffid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "cart code generated",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const admindeleteuserController = async (req, res, next) => {
  try {
    const { staffid } = req.body;
    let comment = await AdminModel.findByIdAndDelete(staffid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "cart code generated",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updateadminController = async (req, res, next) => {
  const {
    lastname,
    firstname,
    email,
    password,
    address,
    photo,
    phone,
    dob,
    adminid,
  } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const staff = await AdminModel.findOne({ email: userEmail });

    if (staff._id != adminid) {
      return res.status(200).json({
        status_code: 400,
        status: true,
        message: "email already exist",
        error: "email already exist",
      });
    }

    const data = {
      lastname,
      firstname,
      userEmail,
      password,
      address,
      photo,
      phone,
      dob,
      adminid,
    };

    let trainee = await adminupdateprofileModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  adminretrieveusersController,
  updateadminController,
  adminretrievesingleuserController,
  admindeleteuserController,
};
