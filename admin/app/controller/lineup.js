const { lineupModel } = require("../../core/db/lineup");
const {
  adminaddlineupModel,
  adminretrievelineupModel,
  adminretrievelineupviewsform,
  adminchecklineupModel,
} = require("../model/lineup");

const admincheckaddlineupController = async (req, res, next) => {
  const { company, location, email } = req.body;
  try {
    const userEmail = email.toLowerCase();
    const checklineup = await lineupModel.findOne({
      company,
      location,
      email: userEmail,
    });
    if (checklineup) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "candidate already linedup",
      });
    }
    const data = { company, location };
      let trainee = await adminchecklineupModel(data, res);
      if (trainee == null) {
        return res.status(400).json({
            status_code: 400,
            status: false,
            message: "form does not exist",
          }); 
      }
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "candidate not linedup",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminaddlineupController = async (req, res, next) => {
  const recruitform = req.body;
  try {
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
    handleError(error.message)(res);
  }
};

const adminretrievelineupController = async (req, res, next) => {
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
  adminretrievelineupController,
  adminaddlineupController,
  admincheckaddlineupController,
};
