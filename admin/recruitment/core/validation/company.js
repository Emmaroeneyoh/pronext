const joi = require("joi");

const admincreatecompanyValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    name: joi.string().required(),
    country: joi.string().required().allow(""),
    logo: joi.string().required(),
    phone: joi.optional().required(),
    document: joi.string().required().allow(""),
    note: joi.string().required().allow(""),
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
const adminupdatecompanyValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    companyid: joi.string().required().length(24),
    name: joi.string().required(),
    country: joi.string().required(),
      logo: joi.string().required(),
      phone: joi.optional().required(),
    document: joi.string().required(),
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
const admindeletecompanyValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    companyid: joi.string().required().length(24),
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
const adminretrievecompanyValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    companyid: joi.string().required().length(24),
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
  admindeletecompanyValidation,
  adminupdatecompanyValidation,
  admincreatecompanyValidation,
  adminretrievecompanyValidation,
};
