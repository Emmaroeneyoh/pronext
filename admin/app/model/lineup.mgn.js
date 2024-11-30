const { lineupModel } = require("../../core/db/lineup");
const { getcurrentdate } = require("../../core/utils");

const adminupdatelineupModel = async (data, res) => {
  try {
    const { recruitform, lineupid } = data;
    const form = await lineupModel.findByIdAndUpdate(
      lineupid, // The ID of the document to update
      recruitform, // The data to update
      { new: true } // Return the updated document
    );

  

    return form;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
    // return handleError(error.message)(res)
  }
};

module.exports = {
  adminupdatelineupModel,
};
