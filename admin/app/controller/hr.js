const { AdminModel } = require("../../core/db/admin");
const {
  adminupdateprofileModel,
  adminupdatepasswordModel,
  admindashboardModel,
  adminretrieveteamleaderModel,
  admindeleteadminModel,
  adminupdateroleModel,
} = require("../model/hr");
const bcrypt = require("bcrypt");
const { findjobModel } = require("../../../user/core/db/find.work");
const { groupModel } = require("../../core/db/group");

const adminretrieveusersController = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    const { role, status } = req.body;
    // const date = req.query.date;
    var query = { $and: [] };

    // if (date && date != "") {
    //   query.$and.push({ createdAt: date });
    // }
    // if (!type || type.length == 0) {
    //   return res.status(400).json({
    //     status_code: 400,
    //     status: false,
    //     message: "type must not be an empty array",
    //   });
    // }
    if (status && status.length > 0) {
      query.$and.push({ 'administrative.status': { $in: status } });
    }
    if (role && role.length > 0) {
      query.$and.push({ 'administrative.role': { $in: role } });
    }
    if (query.$and.length == 0) {
            let admins = await AdminModel.find()
            .skip(skip) // skip documents
            .limit(limit).sort({ createdAt: -1 })
          return res.status(200).json({
            status_code: 200,
            status: true,
            message: "cart code generated",
            data: admins,
          });
          }
          let admins = await AdminModel.find(query)
            .skip(skip) // skip documents
            .limit(limit).sort({ createdAt: -1 })
          return res.status(200).json({
            status_code: 200,
            status: true,
            message: "cart code generated",
            data: admins,
          });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: formsdata ,
      pagination: {
        limit,
        page, totalpages
      },
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

// const adminretrieveusersController = async (req, res, next) => {
//   try {
//     const page = req.body.page || 1;
//     const status = req.query.status;
//     const role = req.query.role;
//     console.log('poel', role, status)
//     var query = { $and: [] }
   
//     if (status ) {
//             query.$and.push({ "administrative.status": status})
//       }
   
//     if (role ) {
    
//             query.$and.push({ "administrative.role": role})
//       }
//     const limit = 10;
//     let skip = (page - 1) * limit;

//     if (query.$and.length == 0) {
//       let comment = await AdminModel.find()
//       .skip(skip) // skip documents
//       .limit(limit);
//     return res.status(200).json({
//       status_code: 200,
//       status: true,
//       message: "cart code generated",
//       data: comment,
//     });
//     }
//     let comment = await AdminModel.find(query)
//       .skip(skip) // skip documents
//       .limit(limit);
//     return res.status(200).json({
//       status_code: 200,
//       status: true,
//       message: "cart code generated",
//       data: comment,
//     });
//   } catch (error) {
//     console.log(error);
//     handleError(error.message)(res);
//   }
// };
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
    address,
    phone,
    dob,
    nationality,
    state,
    city,
    gender,
    role,
    status,
    middlename,   maritalstatus ,
    adminid, staffid , recruiter_active , teamleader
  } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const staff = await AdminModel.findOne({ "basic_info.email": userEmail });

    // if (staff._id != staffid) {
    //   return res.status(200).json({
    //     status_code: 400,
    //     status: true,
    //     message: "email already exist",
    //     error: "email already exist",
    //   });
    // }

    const data = {
      lastname,
    firstname,
    userEmail,
    address,
    phone,
    dob,
    nationality,
    state,
    city,
    gender,
    middlename,   maritalstatus ,
    adminid, role,
    status, recruiter_active , teamleader , staffid
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
const updateadminrroleController = async (req, res, next) => {
  const {
    role ,
    adminid, status, staffid
  } = req.body;
  try {

    const data = {
      role ,
      staffid, status,
    };

    let trainee = await adminupdateroleModel(data, res);

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
    const staff = await AdminModel.findOne({ "basic_info.email": useremail });
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


const admindeleteadminController = async (req, res, next) => {
  try {
    const { staffid } = req.body;
    const groupleader = await groupModel.findOne({ teamleader: staffid });
    if (groupleader) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "you cannot delete a team leader that is assigned to a group",
      });
    }
    const data = {
      staffid,
    };
    let trainee = await admindeleteadminModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
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
  admindeleteadminController, updateadminrroleController
};
