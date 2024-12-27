const { AdminModel } = require("../../core/db/admin");
const { lineupModel } = require("../../core/db/lineup");
const {
  topcompanyrecuiterdata,
  topselectcompanyrecuiterdata,
  topjoinercompanyrecuiterdata,
} = require("./analytics/companytopdata");
const { totalcontactformdata, totalformdata } = require("./analytics/form");
const {
  lineupstatusdata,
  totallineupdata,
  totallocationdata,
  totalcompanydata,
  totalrecruiterdata,
} = require("./analytics/lineupstatus");
const {
  toplocationrecuiterdata,
  topselectlocationrecuiterdata,
  topjoinerlocationrecuiterdata,
} = require("./analytics/locationtopdata");
const {
  getTomorrowInterviews,
  getTodayInterviews,
  getYesterdayInterviews,
} = require("./analytics/today_yesteray");
const {
  topjoinerineuprecuiterdata,
  toplineuprecuiterdata,
  topselectlineuprecuiterdata,
  topthreelineuprecuiterdata,
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
    const topthreerecuiter = await topthreelineuprecuiterdata();
    const totalinterviewtomorrow = await getTomorrowInterviews();
    const totalinterviewtoday = await getTodayInterviews();
    const totalinterviewyesterday = await getYesterdayInterviews();
    const overall_lineup = await lineupModel.countDocuments()

    //lineupcountries
    const totalnigerian = await AdminModel.find({
      "address_details.nationality": "668977e4f9f4b96014101539",
    }).select("_id");
    const nigerianrecruiter = totalnigerian.map((obj) => obj._id);
    const totalnigerianlineup = await lineupModel.countDocuments({
      adminid: { $in: nigerianrecruiter },
    });

    //for kenya
    const totalkenya = await AdminModel.find({
      "address_details.nationality": "668977e4f9f4b96014101539",
    }).select("_id");
    const kenyarecruiter = totalkenya.map((obj) => obj._id);
    const totalkenyalineup = await lineupModel.countDocuments({
      adminid: { $in: kenyarecruiter },
    });

    //for Philipine
    const totalPhilipine = await AdminModel.find({
      "address_details.nationality": "668977e4f9f4b96014101539",
    }).select("_id");
    const Philipinerecruiter = totalPhilipine.map((obj) => obj._id);
    const totalPhilipinelineup = await lineupModel.countDocuments({
      adminid: { $in: Philipinerecruiter },
    });

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
      totalnigerianlineup,
      totalkenyalineup,
      totalPhilipinelineup,
      topthreerecuiter,
      totalinterviewtomorrow,
      totalinterviewyesterday,
      totalinterviewtoday,
      overall_lineup
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
