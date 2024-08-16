const { locationModel } = require("../core/db/location");
const { getcurrentdate } = require("../../core/utils");

const admincreatelocationModel = async (data, res) => {
  try {
    const {
      salary_range,
      account_name,
      document,
      status,
      remark,
      address,
      city,
      state,
      phone,
      name,
      experience,
      education,
      interview_mode,
      operation_mode,
      startup_date,
      other_info,
      company,
      country,
      adminid,
    } = data;

    const form = await new locationModel({
      salary_range,
      account_name,
      document,
      status,
      remark,
      address,
      city,
      state,
      phone,
      name,
      experience,
      education,
      interview_mode,
      operation_mode,
      startup_date,
      other_info,
      company,
      country,
      createdBy: adminid,
    });
    const productDetails = await form.save();

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const updatelocationModel = async (data, res) => {
  try {
    const {
      salary_range,
      account_name,
      document,
      status,
      remark,
      address,
      city,
      state,
      phone,
      name,

      adminid,
      locationid,
      experience,
      education,
      interview_mode,
      operation_mode,
      startup_date,
      other_info,
      company,
      country,
    } = data;

    const editedAt = getcurrentdate();
    const editedBy = adminid;

    const form = await locationModel.findByIdAndUpdate(locationid, {
      $set: {
        salary_range,
        account_name,
        document,
        status,
        remark,
        address,
        city,
        state,
        phone,
        name,
        experience,
        education,
        interview_mode,
        operation_mode,
        startup_date,
        other_info,
        company,
        country,
        createdBy: adminid,
        editedAt,
        editedBy,
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admincreatelocationModel,
  updatelocationModel,
};
