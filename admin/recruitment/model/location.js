const { locationModel } = require("../core/db/location");
const { getcurrentdate } = require("../../core/utils");

const admincreatelocationModel = async (data, res) => {
  try {
    const {
      document,
      status,
      remark,
      address,
      city,
      state,

      name,
      account,
      company,
      country,
      adminid,
    } = data;

    const form = await new locationModel({
      document,
      status,
      remark,
      address,
      city,
      state,

      name,
      account,
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
      document,
      status,
      remark,
      address,
      city,
      state,

      name,

      adminid,
      locationid,
      account,
      company,
      country,
    } = data;

    const editedAt = getcurrentdate();
    const editedBy = adminid;

    const form = await locationModel.findByIdAndUpdate(locationid, {
      $set: {
        document,
        status,
        remark,
        address,
        city,
        state,

        name,
        account,
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
