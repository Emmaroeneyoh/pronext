const joi = require("joi");
const { handleError } = require("../utils");

const admincreateserviceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    description: joi.string().required(),
    photo: joi.string().required(),
    tag: joi.string().required(),
    city: joi.string().required(),
    category: joi.string().required(),
    title: joi.string().required(),
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

const adminupdateserviceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    serviceid: joi.string().required(),
    description: joi.string().required(),
    photo: joi.string().required(),
    tag: joi.string().required(),
    city: joi.string().required(),
    category: joi.string().required(),
    title: joi.string().required(),
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
const adminretrievedeleteserviceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    serviceid: joi.string().required(),
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
const adminsingleserviceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    serviceid: joi.string().required(),
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
const adminuserformValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    formid: joi.string().required(),
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
const adminupdateformstatusValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    formid: joi.string().required(),
    type: joi.string().required(),
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

module.exports = {
  adminretrievedeleteserviceValidation,
  admincreateserviceValidation,
  adminupdateserviceValidation,
  adminuserformValidation,
  adminsingleserviceValidation,  adminupdateformstatusValidation
};
