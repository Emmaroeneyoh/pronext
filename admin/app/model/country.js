const { countryModel } = require("../../core/db/country");
const { groupModel } = require("../../core/db/group");
const { getcurrentdate } = require("../../core/utils");

const admincreatecountryModel = async (data, res) => {
  try {
    const { name, flag, continent, note, adminid, additional_note } = data;

    const form = await new countryModel({
      name,
      flag,
      continent,
      note,
      createdBy: adminid,
      additional_note,
    });
    const productDetails = await form.save();

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const updatecountryModel = async (data, res) => {
  try {
    const { name, flag, continent, note, adminid, countryid, additional_note } =
      data;

    const editedAt = getcurrentdate();
    const editedBy = adminid;

    const form = await countryModel.findByIdAndUpdate(countryid, {
      $set: {
        name,
        flag,
        continent,
        note,
        createdBy: adminid,
        additional_note,
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
const admincreategroupModel = async (data, res) => {
  try {
    const { groupname, teamleader } = data;

    const form = await new groupModel({
      name: groupname,
      teamleader,
    });
    const productDetails = await form.save();

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  admincreatecountryModel,
  updatecountryModel,
  admincreategroupModel,
};
