const joi = require("joi");

const admincreatespaceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    title: joi.string().required(),
    note: joi.string().required(),
    general: joi.boolean().required(),
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

const adminupdatespaceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    spaceid: joi.string().required().length(24),
    title: joi.string().required(),
    note: joi.string().required(),
    general: joi.boolean().required(),
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

const adminsinglespaceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    spaceid: joi.string().required().length(24),
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
const admindeletespaceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    spaceid: joi.string().required().length(24),
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
const adminretrievespaceValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    general: joi.boolean().required()
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

module.exports = {
  adminretrievespaceValidation,
  adminsinglespaceValidation,
  adminupdatespaceValidation,
  admincreatespaceValidation,
  admindeletespaceValidation 
};
