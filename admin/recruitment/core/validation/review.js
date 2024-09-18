const joi = require("joi");

const admincreatelineupreviewValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    lineupid: joi.string().required().length(24),
    status: joi.string().required(),
    remark: joi.string().required(),
    rating: joi.number().required(),
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
const adminupdatelineupreviewValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    reviewid: joi.string().required().length(24),
    status: joi.string().required(),
    remark: joi.string().required(),
    rating: joi.number().required(),
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

const adminsinglelineupreviewValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    reviewid: joi.string().required().length(24),
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

const adminretrievelineupreviewValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required().length(24),
    location: joi.string().required().length(24),
    company: joi.string().required().length(24),
    email: joi.string().required().email(),
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
  adminsinglelineupreviewValidation,
  adminupdatelineupreviewValidation,
  admincreatelineupreviewValidation,
  adminretrievelineupreviewValidation,
};
