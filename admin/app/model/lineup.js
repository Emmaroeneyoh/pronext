const { findjobModel } = require("../../../user/core/db/find.work");
const { formModel } = require("../../core/db/form");
const { lineupModel } = require("../../core/db/lineup");

const adminchecklineupModel = async (data, res) => {
  try {
    const { company, location } = data;

    const form = await formModel.findOne({
      "location.location": location,
      "location.company": company,
    });

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminaddlineupModel = async (data, res) => {
  try {
    const { recruitform } = data;

    const form = await new lineupModel(recruitform);
    const productDetails = await form.save();

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminretrievecandidateModel = async (data, res) => {
  try {
    const { query } = data;

    let lineuplist;
    if (query.$and.length >= 1) {
      console.log("good");
      lineuplist = await lineupModel.find(query);
    } else {
      lineuplist = await lineupModel.find();
    }

    return lineuplist;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminretrievelineupModel = async (data, res) => {
  try {
    const { query } = data;

    let lineuplist;
    if (query.$and.length >= 1) {
      console.log("good");
      lineuplist = await lineupModel.find(query);
    } else {
      lineuplist = await lineupModel.find();
    }

    return lineuplist;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminretrievesinglelineupModel = async (data, res) => {
  try {
    const { lineupid } = data;
    let lineup = await lineupModel.findById(lineupid).populate({
      path: "adminid company location",
      select: "basic_info.firstname basic_info.lastname",
    });
    if (!lineup) {
      
    }
    const company = lineup.company._id.toString();
    const location = lineup.location._id.toString()
    console.log(company, location)
    const form = await formModel.findOne({
      "location.location": location,
      "location.company": company,
    });
    return lineupdata = {
        form , lineup
    };
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const adminretrievelineupviewsform = async (data, res) => {
  try {
    const { query } = data;

    let lineuplist;
    if (query.$and.length >= 1) {
      lineuplist = await findjobModel.find(query);
    } else {
      lineuplist = await findjobModel.find();
    }

    return lineuplist;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  adminaddlineupModel,
  adminretrievecandidateModel,
  adminretrievelineupviewsform,
  adminchecklineupModel,
  adminretrievelineupModel,
  adminretrievesinglelineupModel,
};
