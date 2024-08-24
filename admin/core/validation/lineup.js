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
    status: joi.string().required().allow(""),
    company: joi.string().required().allow(""),
    location: joi.string().required().allow(""),
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
  adminretrievelineupValidation,
  adminchecklineupValidation,
};
