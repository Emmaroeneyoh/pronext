const { lineupModel } = require("../../core/db/lineup");
const { handleError, getcurrentdate } = require("../../core/utils");
const { admindashboardModel } = require("../model/dashboard");

const adminmaindashboardController = async (req, res, next) => {
  const { date } = req.body;
    try {
      
       
    const data = {
      date,
    };
    let dashboard = await admindashboardModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data:dashboard
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};


module.exports = {
    adminmaindashboardController 
}