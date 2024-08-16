const { getcurrentdate } = require("../../core/utils");
const { companyModel } = require("../core/db/company");

const admincreatecompanyModel = async (data, res) => {
  try {
    const { country, document, logo, note, phone, name, adminid } = data;

    const form = await new companyModel({
      country,
      document,
      logo,
      note,
      phone,
      name,
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

const updatecompanyModel = async (data, res) => {
  try {
    const { country, document, logo, note, phone, name, adminid, companyid } =
      data;

    const editedAt = getcurrentdate();
    const editedBy = adminid;

    const form = await companyModel.findByIdAndUpdate(companyid, {
      $set: {
        country, document, logo, note, phone, name,
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
  admincreatecompanyModel,
  updatecompanyModel,
};
