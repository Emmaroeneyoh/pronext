const { topcompanyrecuiterdata, topselectcompanyrecuiterdata, topjoinercompanyrecuiterdata } = require("./analytics/companytopdata");
const { totalcontactformdata, totalformdata } = require("./analytics/form");
const {
  lineupstatusdata,
  totallineupdata,
  totallocationdata,
  totalcompanydata,
  totalrecruiterdata,
} = require("./analytics/lineupstatus");
const { toplocationrecuiterdata, topselectlocationrecuiterdata, topjoinerlocationrecuiterdata } = require("./analytics/locationtopdata");
const { topjoinerineuprecuiterdata,
  toplineuprecuiterdata,
  topselectlineuprecuiterdata,
} = require("./analytics/topdata");

const admindashboardModel = async (data, res) => {
  try {
    const { start_date, end_date } = data;
    const date = { start_date, end_date };
    const lineupstatus = await lineupstatusdata(date);
    const totallineup = await totallineupdata(date);
    const totalcompany = await totalcompanydata(date);
    const totallocation = await totallocationdata(date);
    const totalrecruiter = await totalrecruiterdata(date);
    const totalcontactusform = await totalcontactformdata(date);
    const totalform = await totalformdata(date);
    const toplineuprecuiter = await toplineuprecuiterdata(date);
    const topselectlineuprecuiter = await topselectlineuprecuiterdata(date);
    const topjoinerineuprecuiter = await topjoinerineuprecuiterdata(date);
    const topcompanyrecuiter = await topcompanyrecuiterdata(date);
    const topselectcompanyrecuiter = await topselectcompanyrecuiterdata(date);
    const topjoinercompanyrecuiter = await topjoinercompanyrecuiterdata(date);
    const toplocationrecuiter = await toplocationrecuiterdata(date);
    const topselectlocationrecuiter = await topselectlocationrecuiterdata(date);
    const topjoinerlocationrecuiter = await topjoinerlocationrecuiterdata(date);

    const dashboard = {
      lineupstatus,
      totallineup,
      totalcompany,
      totallocation,
      totalrecruiter,
      totalcontactusform,
      totalform,
      toplineuprecuiter,
      topselectlineuprecuiter,
      topjoinerineuprecuiter,
      topcompanyrecuiter,
      topselectcompanyrecuiter,
      topjoinercompanyrecuiter,
      toplocationrecuiter,
      topselectlocationrecuiter,
      topjoinerlocationrecuiter,
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
