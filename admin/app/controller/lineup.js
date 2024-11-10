const { draftModel } = require("../../core/db/draft");
const { formModel } = require("../../core/db/form");
const { lineupModel } = require("../../core/db/lineup");
const {
  adminaddlineupModel,
  adminretrievelineupviewsform,
  adminchecklineupModel,
  adminretrievecandidateModel,
  adminretrievelineupModel,
  adminretrievesinglelineupModel,
} = require("../model/lineup");

const admincheckaddlineupController = async (req, res, next) => {
  const { company, location, email , adminid } = req.body;
  try {
    const form = await formModel.findOne({
      "location.location": location,
      "location.company": company,
    });
    if (!form) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "form shape dont exist",
      });
    }
    const userEmail = email.toLowerCase();
    const lineup = await lineupModel.findOne({
      company,
      location,
      email: userEmail,
    });

    if (lineup) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: " linedup already exist ",
      });
    }

    //check for draft
    const checkdraft = await draftModel.findOne({
      company,
      location,
      email: userEmail,
    });
    if (checkdraft.adminid == adminid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "lineup already in draft",
        type: "shape",
      });
    }
    const formid = form._id;
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: " linedup dont exist",
      type: "shape",
      data: formid,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminaddlineupController = async (req, res, next) => {
  const recruitform = req.body;
  try {
    const { company, location, email } = req.body;
    const userEmail = email.toLowerCase();
    const lineup = await lineupModel.findOne({
      company,
      location,
      email: userEmail,
    });
    if (lineup) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: " linedup aready exist ",
      });
    }
    const data = {
      recruitform,
    };
    let trainee = await adminaddlineupModel(data, res);
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

const adminretrievecandidateController = async (req, res, next) => {
  try {
    const { location, company, status } = req.body;
    var query = { $and: [] };

    if (status != "") {
      query.$and.push({ status: status });
    }
    if (company != "") {
      query.$and.push({ company: company });
    }
    if (location != "") {
      query.$and.push({ location: location });
    }

    const data = { query };
    let trainee = await adminretrievecandidateModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};
const adminretrievelineupController = async (req, res, next) => {
  try {
    const { location, company, status, recruiter, interviewdate } = req.body;
    var query = { $and: [] };

    if (Array.isArray(status) && status.length > 0) {
      console.log(status);
      query.$and.push({ status: { $in: status } });
    }
    if (company) {
      query.$and.push({ company: company });
    }
    if (location) {
      query.$and.push({ location: location });
    }
    if (interviewdate) {
      query.$and.push({ interviewdate: interviewdate });
    }
    if (recruiter) {
      console.log("ididue");
      query.$and.push({ adminid: recruiter });
    }
    console.log(query);
    const data = { query };
    let trainee = await adminretrievelineupModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};
const adminretrievesinglelineupController = async (req, res, next) => {
  try {
    const { lineupid } = req.params;
    console.log("singe");
    let lineup = await lineupModel.findById(lineupid).populate({
      path: "adminid company location",
      select: "basic_info.firstname basic_info.lastname",
    });
    if (!lineup) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "dont exist",
      });
    }
    const data = { lineupid };
    let trainee = await adminretrievesinglelineupModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};
const adminretrieveformController = async (req, res, next) => {
  try {
    const { date, status } = req.body;
    var query = { $and: [] };

    if (status != "") {
      query.$and.push({ status: status });
    }
    if (date != "") {
      const exactDate = new Date(date); // Convert the string to a Date object
      query.$and.push({ createdAt: exactDate });
    }

    const data = { query };
    let trainee = await adminretrievelineupviewsform(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};

module.exports = {
  adminretrievecandidateController,
  adminaddlineupController,
  admincheckaddlineupController,
  adminretrievelineupController,
  adminretrievesinglelineupController,
};
