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
const { handleError, checktime10pm_12am } = require("../../core/utils");
const { groupModel } = require("../../core/db/group");
const { AdminModel } = require("../../core/db/admin");

const admincheckaddlineupController = async (req, res, next) => {
  const { company, location, email, adminid } = req.body;
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

    //check if lineup exist
    if (lineup) {
      //check this lineup in draft
      const checkdraft = await draftModel.findOne({
        company,
        location,
        email: userEmail,
        adminid,
      });
      // if the draft exist , cehck if its the same person that created the lineup
      if (checkdraft && checkdraft.adminid != lineup.adminid) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "lineup already added, delete from draft",
        });
      }
    }
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
    if (checkdraft && checkdraft.adminid == adminid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "lineup already in draft",
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
    if (!checktime10pm_12am()) {
      const adminid = req.body.adminid;
      const admin = await AdminModel.findById(adminid);
      const role = admin.administrative.role;
      if (role != "superAdmin") {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "cant add lineup by this time",
        });
      }
    }
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
    const { location, company, status, recruiter, interviewdate, group } =
      req.body;
    var query = { $and: [] };

    if (company.length > 0) {
      query.$and.push({ company: { $in: company } });
    }
    if (location.length > 0) {
      query.$and.push({ location: { $in: location } });
    }
    if (status.length > 0) {
      query.$and.push({ lineUpStatus: { $in: status } });
    }
    if (interviewdate) {
      const [day, month, year] = interviewdate.split("/").map(Number);
      const startOfDay = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
      const endOfDay = new Date(Date.UTC(year, month - 1, day, 23, 59, 59));
      console.log(startOfDay , endOfDay)
      query.$and.push({
        interviewDate: {
          $gte: (startOfDay),
          $lte: (endOfDay),
        },
      });
    }
    if (recruiter.length > 0) {
      query.$and.push({ adminid: { $in: recruiter } });
    }
    if (group.length > 0) {
      const admins = await AdminModel.find({
        "recruiter.teamleader": { $in: group },
      });
      const groupmembers = admins.map((obj) => obj._id);
      query.$and.push({ adminid: { $in: groupmembers } });
    }
    const data = { query };
    console.log(query)
    let trainee = await adminretrievelineupModel(data, res);
    // ["66ead5ca592abea9c05c21c0" , "66eae7ca592abea9c05c240d"],
 
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
