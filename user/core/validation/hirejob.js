const joi = require("joi");



const userhiretalentValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    email: joi.string().required(),
   name: joi.string().required(),
   additionalmessage: joi.string().required(),
    scheduledate: joi.string().required(),
    phone: joi.string().required(),
    proposaltype: joi.string().required(),
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

const userfindjobValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    email: joi.string().required(),
    educationalaccount: joi.string().required(),
    lastname: joi.string().required(),
    dob: joi.string().required(), 
    gender: joi.string().required(),
   firstname: joi.string().required(),
   educationalqualification: joi.string().required(),
   location: joi.string().required(),
    phone: joi.string().required(),
    bpoexperience: joi.string().required(),
    scheduledate: joi.string().required(),
    site: joi.string().required(),
    file: joi.string().required(),
    type: joi.string().required(),
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

module.exports = {
    userhiretalentValidation , userfindjobValidation
}