const { AdminModel } = require("../../core/db/admin");
const {
  adminupdateprofileModel,
  adminupdatepasswordModel,
  admindashboardModel,
  adminretrieveteamleaderModel,
} = require("../model/hr");
const bcrypt = require("bcrypt");
const { findjobModel } = require("../../../user/core/db/find.work");

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
    const { staffid } = req.params;
    let comment = await AdminModel.findById(staffid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "user recieved",
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
    const staff = await AdminModel.findOne({ 'basic_info.email': userEmail });

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

const updateadminprofilecontroller = async (req, res, next) => {
  try {
    const { firstname, email, lastname, photo, address, phone, dob, staffid } =
      req.body;
    const useremail = email.toLowerCase();
    const staff = await AdminModel.findOne({ 'basic_info.email': useremail });
    if (staff._id != staffid) {
      return res.status(200).json({
        status_code: 400,
        status: true,
        message: "email already exist",
        error: "email already exist",
      });
    }
    const data = {
      firstname,
      useremail,
      lastname,
      photo,
      address,
      phone,
      dob,
      staffid,
    };
    const updateprofile = await adminupdateprofileModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "user profile updated",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatepasswordController = async (req, res, next) => {
  const { adminid, currentpassword, newpassword } = req.body;
  try {
    const customerDetails = await AdminModel.findById(adminid);
    if (!customerDetails) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user dont exist on our application",
        data: [],
        error: "user dont exist on our application",
      });
    }

    const checkPassword = await bcrypt.compare(
      currentpassword,
      customerDetails.password
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
    const data = {
      adminid,
      Harshpassword,
    };

    let trainee = await adminupdatepasswordModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "password updated",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const admindashboardController = async (req, res, next) => {
  try {
    const data = "pol";
    let trainee = await admindashboardModel(data, res);
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
const adminretrieveteamleaderController = async (req, res, next) => {
  try {
    const data = "pol";
    let trainee = await adminretrieveteamleaderModel(data, res);
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
  adminretrieveusersController,
  updateadminController,
  adminretrievesingleuserController,
  admindeleteuserController,
  updateadminprofilecontroller,
  updatepasswordController,
  admindashboardController,
  adminretrieveteamleaderController,
};
