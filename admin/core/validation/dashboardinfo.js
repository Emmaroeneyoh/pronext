const joi = require("joi");

const admincreatedashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    title: joi.string().required(),
    details: joi.string().required(),
    appear_date: joi.string().required(),
    disappear_date: joi.string().required(),
    status: joi.boolean().required(),
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
const adminupdatedashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    dashboardinfoid: joi.string().required().length(24),
    title: joi.string().required(),
    details: joi.string().required(),
    appear_date: joi.string().required(),
    disappear_date: joi.string().required(),
    status: joi.boolean().required(),
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
const adminsingledashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    dasboardinfoid: joi.string().required().length(24),
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
const adminretrievesingledashboardValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    dashboardinfoid: joi.string().required().length(24),
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
  adminsingledashboardValidation,
  adminupdatedashboardValidation,
    admincreatedashboardValidation,
    adminretrievesingledashboardValidation
};
