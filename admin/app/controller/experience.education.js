const { educationModel } = require("../../core/db/education");
const { experienceModel } = require("../../core/db/experience");
const { getcurrentdate } = require("../../core/utils");
const {
  admincreateexperienceModel,
  admincreateeducationModel,
} = require("../model/experience.education");
const { handleError } = require("../../core/utils");
const admincreateexperienceController = async (req, res, next) => {
  const { value, name, adminid } = req.body;
  try {
    const data = {
      value,
      name,
      adminid,
    };
    let trainee = await admincreateexperienceModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const adminupdateexperienceController = async (req, res, next) => {
  const { value, name, experienceid, adminid } = req.body;
  try {
    const data = {
      value,
      name,
    };
    const editedAt = getcurrentdate();
    const editedBy = adminid;
    console.log("updating ", editedAt, editedBy);
    const form = await experienceModel.findByIdAndUpdate(experienceid, {
      $set: {
        value,
        name,
        editedAt,
        editedBy,
      },
    });
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

const adminretrieveexperienceController = async (req, res, next) => {
  try {
    const page = req.body.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    let trainee = await experienceModel
      .find()
      .populate({
        path: "createdBy editedBy",
        select: "basic_info.firstname basic_info.lastname",
      })
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
    return handleError(error.message)(res);
  }
};
const adminretrievesingleexperienceController = async (req, res, next) => {
  try {
    const { experienceid } = req.params;
    let trainee = await experienceModel.findById(experienceid).populate({
      path: "createdBy editedBy",
      select: "basic_info.firstname basic_info.lastname",
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const admindeleteexperienceController = async (req, res, next) => {
  try {
    const { experienceid } = req.body;
    let trainee = await experienceModel.findByIdAndDelete(experienceid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
const admincreateeducationController = async (req, res, next) => {
  const { value, name, adminid } = req.body;
  try {
    const data = {
      value,
      name,
      adminid,
    };
    let trainee = await admincreateeducationModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminupdateeducationController = async (req, res, next) => {
  const { value, name, educationid, adminid } = req.body;
  try {
    const editedAt = getcurrentdate();
    const editedBy = adminid;
    const form = await educationModel.findByIdAndUpdate(educationid, {
      $set: {
        value,
        name,
        editedBy,
        editedAt,
      },
    });

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

const adminretrieveeducationController = async (req, res, next) => {
  try {
    const page = req.body.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    let trainee = await educationModel
      .find()
      .populate({
        path: "createdBy editedBy",
        select: "basic_info.firstname basic_info.lastname",
      })
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
    return handleError(error.message)(res);
  }
};
const adminretrievesingleeducationController = async (req, res, next) => {
  try {
    const { educationid } = req.params;
    let trainee = await educationModel.findById(educationid).populate({
      path: "createdBy editedBy",
      select: "basic_info.firstname basic_info.lastname",
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const admindeleteeducationController = async (req, res, next) => {
  try {
    const { educationid } = req.body;
    let trainee = await educationModel.findByIdAndDelete(educationid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

module.exports = {
  adminretrieveexperienceController,
  admincreateexperienceController,
  adminretrieveeducationController,
  admincreateeducationController,
  adminupdateeducationController,
  admindeleteeducationController,
  adminretrievesingleeducationController,
  admindeleteexperienceController,
  adminretrievesingleexperienceController,
  adminupdateexperienceController,
};
