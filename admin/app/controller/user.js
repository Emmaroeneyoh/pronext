const { findjobModel } = require("../../../user/core/db/find.work");
const { hiretalentModel } = require("../../../user/core/db/hire.talent");

const adminretrievesinglehiretalentController = async (req, res, next) => {
    const { formid } = req.params;
  try {
    let trainee = await hiretalentModel.findById(formid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const admindeletehiremeController = async (req, res, next) => {
  const { formid } = req.body;
  try {
    let trainee = await hiretalentModel.findByIdAndDelete(formid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrieveallhiretalentController = async (req, res, next) => {
  try {
    let trainee = await hiretalentModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievesinglefindjobController = async (req, res, next) => {
  const { formid } = req.params;
  try {
    let trainee = await findjobModel.findById(formid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const admindeletefindjobController = async (req, res, next) => {
  const { formid } = req.body;
  try {
    let trainee = await findjobModel.findByIdAndDelete(formid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrieveallfindjobController = async (req, res, next) => {
  try {
    let trainee = await findjobModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  adminretrievesinglehiretalentController,
  adminretrieveallhiretalentController,
  admindeletehiremeController,
  adminretrieveallfindjobController,
  admindeletefindjobController,
  adminretrievesinglefindjobController,
};
