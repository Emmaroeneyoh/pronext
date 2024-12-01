const { totalcontactformdata, totalformdata } = require("./analytics/form");
const {
  lineupstatusdata,
  totallineupdata,
  totallocationdata,
  totalcompanydata,
  totalrecruiterdata,
} = require("./analytics/lineupstatus");

const admindashboardModel = async (data, res) => {
  try {
    const { start_date , end_date } = data;
    const date = {start_date , end_date}
    const lineupstatus = await lineupstatusdata(date);
    const totallineup = await totallineupdata(date);
    const totalcompany = await totalcompanydata(date);
    const totallocation = await totallocationdata(date);
    const totalrecruiter = await totalrecruiterdata(date);
    const totalcontactusform = await totalcontactformdata(date);
    const totalform = await totalformdata(date);

    const dashboard = {
      lineupstatus,
      totallineup,
      totalcompany,
      totallocation,
      totalrecruiter,
      totalcontactusform,
      totalform,
    };
    return dashboard;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
    // return handleError(error.message)(res)
  }
};

module.exports = {
  admindashboardModel,
};
