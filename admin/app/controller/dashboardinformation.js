const { dashboardinformationModel } = require("../../core/db/dashboardinfo");
const { handleError } = require("../../core/utils");

const admincreatedasboardinfoController = async (req, res, next) => {
  const { status, disappear_date, appear_date, details, title, adminid } =
    req.body;
  try {
    const form = await new dashboardinformationModel({
      createdBy: adminid,
      status,
      disappear_date,
      appear_date,
      details,
      title,
    });
    const productDetails = await form.save();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: productDetails,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const adminupdatedasboardinfoController = async (req, res, next) => {
  const {
    status,
    disappear_date,
    appear_date,
    details,
    title,
    dashboardinfoid,
  } = req.body;
  try {
    const form = await dashboardinformationModel.findByIdAndUpdate(
      dashboardinfoid,
      {
        $set: {
          status,
          disappear_date,
          appear_date,
          details,
          title,
        },
      }
    );
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
   
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const admindeletedasboardinfoController = async (req, res, next) => {
  const { dashboardinfoid } = req.body;
  try {
    await dashboardinformationModel.findByIdAndDelete(dashboardinfoid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const adminretrievesingledasboardinfoController = async (req, res, next) => {
  const { dashboardinfoid } = req.params;
  try {
    const dashboard = await dashboardinformationModel
      .findById(dashboardinfoid)
      .populate({
        path: "createdBy",
        select: "basic_info.firstname basic_info.lastname",
      });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: dashboard,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const adminretrievealldasboardinfoController = async (req, res, next) => {
  try {
    const dashboard = await dashboardinformationModel
      .find()
      .populate({
        path: "createdBy",
        select: "basic_info.firstname basic_info.lastname",
      });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: dashboard
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

module.exports = {
  adminretrievealldasboardinfoController,
  adminretrievesingledasboardinfoController,
  admindeletedasboardinfoController,
  adminupdatedasboardinfoController,
  admincreatedasboardinfoController,
};
