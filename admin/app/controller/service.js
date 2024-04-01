const { serviceModel } = require("../../core/db/service");
const {
  admincreateserviceModel,
  adminupdateserviceModel,
} = require("../model/service");

const admincreateserviceController = async (req, res, next) => {
  const { description, photo, tag, city, category, title } = req.body;
  try {
    const data = {
      description,
      photo,
      tag,
      city,
      category,
      title,
    };
    let trainee = await admincreateserviceModel(data, res);
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

const adminupdateserviceController = async (req, res, next) => {
  const { description, photo, tag, city, category, title, serviceid } =
    req.body;
  try {
    const data = {
      description,
      photo,
      tag,
      city,
      category,
      title,
      serviceid,
    };
    let trainee = await adminupdateserviceModel(data, res);
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

const adminretrievesinglserviceController = async (req, res, next) => {
  const { serviceid } = req.body;
  try {
    let trainee = await serviceModel.findById(serviceid);
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
const admindeleteserviceController = async (req, res, next) => {
  const { serviceid } = req.body;
  try {
    let trainee = await serviceModel.findByIdAndDelete(serviceid);
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
const adminretrieveallserviceController = async (req, res, next) => {
  try {
    let trainee = await serviceModel.find();
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
  admincreateserviceController,
  adminupdateserviceController,
  admindeleteserviceController,
  adminretrievesinglserviceController, adminretrieveallserviceController
};
