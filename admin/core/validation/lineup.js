const joi = require("joi");

const adminchecklineupValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    email: joi.string().required().email(),
    company: joi.string().required(),
    location: joi.string().required(),
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

const adminretrievelineupValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    status: joi.array().min(0),
    company: joi.array().min(0),
    location: joi.array().min(0),
    interviewdate: joi.string().allow(""),
    group: joi.array().min(0),
    recruiter: joi.array().min(0),
  });
  const { error } = schema.validate(req.body)
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
const adminretrievesinglelineupValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    lineupid: joi.string().required(),
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
const adminuodatelineupstatusValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    lineupid: joi.string().required(),
    status: joi.string().required(),
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
const adminsendnotificationValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    emails: joi.array().required(),
    notification: joi.string().required(),
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
const admindeletelineupValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    lineupid: joi.string().required(),
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
const adminsingledraftValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    draftid: joi.string().required(),
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
const adminupdatelineupValidation = (req, res, next) => {
  // Schema for validating data in req.params
  const paramsSchema = joi.object({
    lineupid: joi.string().required().length(24), // expecting adminid in params
  });

  // Schema for validating data in req.body
  const bodySchema = joi.object({
    name: joi.string().required(),
    continent: joi.string().required(),
    flag: joi.string().required(),
    note: joi.string().required(),
  });

  // Validate both params and body
  const { error: paramsError } = paramsSchema.validate(req.params);
  const { error: bodyError } = bodySchema.validate(req.body);

  // Check for validation errors in params or body
  if (paramsError) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: paramsError.details[0].message,
      data: [],
      error: paramsError.details[0].message,
    });
  }

  if (bodyError) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: bodyError.details[0].message,
      data: [],
      error: bodyError.details[0].message,
    });
  }

  return next();
};

module.exports = {
  adminretrievelineupValidation,
  adminchecklineupValidation,
  adminretrievesinglelineupValidation,
  adminuodatelineupstatusValidation,
  adminupdatelineupValidation,
  adminsendnotificationValidation,
  admindeletelineupValidation,
  adminsingledraftValidation,
};
