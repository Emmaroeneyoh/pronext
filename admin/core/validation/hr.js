const joi = require("joi");
const { handleError } = require("../utils");

const adminupdateprofileValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    email: joi.string().required(),
    lastname: joi.string().required(),
    middlename: joi.string().optional().allow(""),
    firstname: joi.string().required(),
    phone: joi.string().required(),
    dob: joi.string().required(),
    gender: joi.string().required(),
    maritalstatus: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminupdateaddressValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    address: joi.string().required(),
    nationality: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminupdateprofilephotoValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    photo: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminupdatesubadminprofileValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    subadminid: joi.string().required(),
    email: joi.string().required(),
    lastname: joi.string().required(),
    middlename: joi.string().optional().allow(""),
    firstname: joi.string().required(),
    phone: joi.string().required(),
    dob: joi.string().required(),
    gender: joi.string().required(),
    maritalstatus: joi.string().required(),
    address: joi.string().required(),
    nationality: joi.string().required().length(24),
    state: joi.string().required(),
    city: joi.string().required(),
    role: joi.string().required(),
    status: joi.string().required(),
    teamleader: joi.string().optional().allow(''),
    recruiter_active : joi.string().optional().allow(''),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminupdatesubaddressValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    subadminid: joi.string().required(),
    address: joi.string().required(),
    nationality: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminupdatesubprofilephotoValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    subadminid: joi.string().required(),
    photo: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminupdateroleValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    subadminid: joi.string().required(),
    role: joi.string().required(),
    status: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminretrievesingleprofileValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminretrievesubadminprofileValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    subadminid: joi.string().required().length(24),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const admindeleteadminValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    staffid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const adminupdateuserValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    email: joi.string().required(),
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    photo: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().required(),
    dob: joi.string().required(),
    staffid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const adminupdatepasswordValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    currentpassword: joi.string().required(),
    newpassword: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminupdatesubadminpasswordValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    subadminid: joi.string().required(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminudeleteuserValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    userid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminmaindashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const admindeletesubamdinValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    subadminid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

module.exports = {
  adminretrievesingleprofileValidation,
  adminupdateprofileValidation,
  admindeleteadminValidation,
  adminupdateuserValidation,
  adminupdatepasswordValidation,
  adminupdateaddressValidation,
  adminudeleteuserValidation,
  adminupdateroleValidation,
  adminupdateprofilephotoValidation,
  adminmaindashboardValidation,
  adminretrievesubadminprofileValidation,
  adminupdateroleValidation,
  adminupdatesubprofilephotoValidation,
  adminupdatesubaddressValidation,
  adminupdatesubadminprofileValidation,
  adminupdatesubadminpasswordValidation,admindeletesubamdinValidation 
};
