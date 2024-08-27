const { companyModel } = require("../core/db/company");
const {
  admincreatecompanyModel,
  updatecompanyModel,
} = require("../model/company");

const admincreatecompanyController = async (req, res, next) => {
  const { country, document, logo, note, phone, name, adminid } = req.body;
  try {
    const data = {
      country,
      document,
      logo,
      note,
      phone,
      name,
      adminid,
    };
    let trainee = await admincreatecompanyModel(data, res);
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
const adminupdatecompanyController = async (req, res, next) => {
  const { country, document, logo, note, phone, name, adminid, companyid } =
    req.body;
  try {
    const data = {
      country,
      document,
      logo,
      note,
      phone,
      name,
      adminid,
      companyid,
    };
    let trainee = await updatecompanyModel(data, res);
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

const adminretrievesinglecompanyController = async (req, res, next) => {
  try {
    const { companyid } = req.params;
    let trainee = await companyModel.findById(companyid).populate({
      path: "createdBy editedBy company",
      select: "basic_info.firstname basic_info.lastname name",
    });
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
const admindeletecompanyController = async (req, res, next) => {
  try {
    const { companyid } = req.body;
    console.log("cpoimutid", companyid);
    let trainee = await companyModel.findByIdAndDelete(companyid);
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

const adminretrievecompanyController = async (req, res, next) => {
  try {
    const page = req.body.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    let trainee = await companyModel
      .find()
      .skip(skip) // skip documents
      .limit(limit);
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
  adminretrievecompanyController,
  admincreatecompanyController,
  adminupdatecompanyController,
  adminretrievesinglecompanyController,
  admindeletecompanyController,
};
