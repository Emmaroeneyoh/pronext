const joi = require("joi");
const { handleError } = require("../utils");

const admincreateformValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    course: joi.boolean().required(),
    dateOfBirth: joi.boolean().required(),
    phoneNumber: joi.boolean().required(),
    city: joi.boolean().required(),
    location:joi
    .alternatives()
    .try(joi.object(), joi.boolean())
    .required(),
    email: joi.boolean().required(),
    fullName: joi.boolean().required(),
    name: joi.boolean().required(),
    gender: joi.alternatives().try(joi.object(), joi.boolean()).required(),
    otterFields: joi.alternatives().try(joi.object(), joi.boolean()).required(),
    currentLocation: joi
      .alternatives()
      .try(joi.object(), joi.boolean())
      .required(),
    maritalStatus: joi
      .alternatives()
      .try(joi.object(), joi.boolean())
      .required(),
    educationalQualification: joi.alternatives().try(joi.object(), joi.boolean()).required(),
    resume: joi.alternatives().try(joi.object(), joi.boolean()).required(),
    bpoAccountAndExperience: joi
      .alternatives()
      .try(joi.object(), joi.boolean())
      .required(),
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
const adminupdateformValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    formid: joi.string().required(),
    course: joi.boolean().required(),
    dateOfBirth: joi.boolean().required(),
    phoneNumber: joi.boolean().required(),
    city: joi.boolean().required(),
    location:joi
    .alternatives()
    .try(joi.object(), joi.boolean())
    .required(),
    email: joi.boolean().required(),
    fullName: joi.boolean().required(),
    name: joi.boolean().required(),
    gender: joi.alternatives().try(joi.object(), joi.boolean()).required(),
    otterFields: joi.alternatives().try(joi.object(), joi.boolean()).required(),
    currentLocation: joi
      .alternatives()
      .try(joi.object(), joi.boolean())
      .required(),
    maritalStatus: joi
      .alternatives()
      .try(joi.object(), joi.boolean())
      .required(),
    educationalQualification:joi.alternatives().try(joi.object(), joi.boolean()).required(),
    resume: joi.alternatives().try(joi.object(), joi.boolean()).required(),
    bpoAccountAndExperience: joi
      .alternatives()
      .try(joi.object(), joi.boolean())
      .required(),
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

const adminsingleformValidation = (req, res, next) => {
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

module.exports = {
  adminsingleformValidation,
  adminupdateformValidation,
  admincreateformValidation,
};
