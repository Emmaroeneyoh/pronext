const joi = require("joi");
const { handleError } = require("../utils");




const adminsignupValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    lastname: joi.string().required(),
   firstname: joi.string().required(),
    photo: joi.string().optional().allow(''),
    address: joi.string().required(),
    phone: joi.string().required(),
    dob: joi.string().required(),
    teamleader: joi.string().optional().allow(''),
    recruiter_active : joi.string().optional().allow(''),
    status: joi.string().required(),
    role: joi.string().required(),
    nationality: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    gender: joi.string().required(),
    city: joi.string().required(),
    middlename: joi.string().optional().allow(""),
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

const adminLoginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return handleError(err)(res);
  }
  return next();
};

const adminforgotpasswordValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required().email(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
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
const adminResetpasswordValidation = (req, res, next) => {
  const schema = joi.object({
    password: joi.string().required(),
    token: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
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
const adminValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
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
  adminsignupValidation,
  adminLoginValidation,
  adminforgotpasswordValidation,
  adminResetpasswordValidation, adminValidation
};
