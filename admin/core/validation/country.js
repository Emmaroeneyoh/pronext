const joi = require("joi");

const admincreatecountryValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    name: joi.string().required(),
    continent: joi.string().required(),
    flag: joi.string().required(),
    note: joi.string().required(),
    additional_note: joi.string().required(),
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
const adminupdatecountryValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    countryid: joi.string().required().length(24),
    name: joi.string().required(),
    additional_note: joi.string().required(),
    continent: joi.string().required(),
    flag: joi.string().required(),
    note: joi.string().required(),
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
const admindeletecountryValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    countryid: joi.string().required(),
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

const adminretrievecountryValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    countryid: joi.string().required(),
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
const admincreategroupValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    teamleader: joi.string().required().length(24),
    name: joi.string().required(),
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
  admincreatecountryValidation,
  admindeletecountryValidation,
  adminretrievecountryValidation,
  adminupdatecountryValidation,
  admincreategroupValidation,
};
