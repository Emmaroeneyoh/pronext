const joi = require("joi");

const admineducationexperienceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    name: joi.string().required(),
    value: joi.number().required(),
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
const adminupdateexperienceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    experienceid: joi.string().required().length(24),
    name: joi.string().required(),
    value: joi.number().required(),
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
const adminupdateeducationValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    educationid: joi.string().required().length(24),
    name: joi.string().required(),
    value: joi.number().required(),
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

const admindeleteexperienceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    experienceid: joi.string().required(),
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
const admindeleteeducationValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    educationid: joi.string().required(),
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

const adminretrieveexperienceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    experienceid: joi.string().required(),
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
const adminretrieveeducationValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    educationid: joi.string().required(),
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
  admineducationexperienceValidation,
  adminretrieveeducationValidation,
  adminretrieveexperienceValidation,
  admindeleteeducationValidation,
  admindeleteexperienceValidation,
  adminupdateexperienceValidation,  adminupdateeducationValidation
};
