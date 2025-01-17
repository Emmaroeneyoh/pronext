const joi = require("joi");

const admincreatelocationValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    name: joi.string().required(),
    country: joi.string().required(),
    state: joi.string().required().allow(""),
    city: joi.string().required().allow(""),
    address: joi.string().required(),
    remark: joi.string().required().allow(""),
    status: joi.string().required(),
    document: joi.string().required().allow(""),
    account: joi.array().required(),
    company: joi.string().required(),
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
const adminupdatelocationValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    locationid: joi.string().required().length(24),
    name: joi.string().required(),
    country: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    address: joi.string().required(),
    remark: joi.string().required(),
    status: joi.string().required(),
    document: joi.string().required(),
    account: joi.array().required(),
   
    company: joi.string().required(),
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
const admindeletelocationValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    locationid: joi.string().required().length(24),
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
const adminretrievelocationValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    locationid: joi.string().required().length(24),
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
  admindeletelocationValidation,
  adminupdatelocationValidation,
    admincreatelocationValidation,
    adminretrievelocationValidation
};
