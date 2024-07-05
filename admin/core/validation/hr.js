const joi = require("joi");
const { handleError } = require("../utils");



const adminupdateprofileValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    email: joi.string().required(),
    lastname: joi.string().required(),
    middlename: joi.string().required(),
    firstname: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().required(),
    dob: joi.string().required(),
    nationality: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    gender: joi.string().required(),
    maritalstatus: joi.string().required(),
    status: joi.string().required(),
    role: joi.string().required(),
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
    staffid: joi.string().required(),
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
    adminid: joi.string().required(),
    staffid: joi.string().required(),
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

module.exports = {
  adminretrievesingleprofileValidation,
  adminupdateprofileValidation,
  admindeleteadminValidation,
  adminupdateuserValidation,
  adminupdatepasswordValidation,  adminudeleteuserValidation , adminupdateroleValidation
};
