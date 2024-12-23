const { lineupModel } = require("../../../core/db/lineup");


const getTomorrowInterviews = async () => {
  try {
    // Get today's date and time
    const today = new Date();

    // Calculate start and end of tomorrow
    const tomorrowStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    ); // Midnight of tomorrow
    const tomorrowEnd = new Date(
      tomorrowStart.getFullYear(),
      tomorrowStart.getMonth(),
      tomorrowStart.getDate() + 1
    ); // Midnight of the day after tomorrow

    // Query to find interviews scheduled for tomorrow
    const interviews = await lineupModel.countDocuments({
      interviewDate: { $gte: tomorrowStart, $lt: tomorrowEnd },
    });

    return interviews;
  } catch (error) {
    console.error("Error fetching interviews:", error);
    throw error;
  }
}

const  getTodayInterviews  = async()  =>{
  try {
    // Get today's date and time
    const today = new Date();

    // Calculate start and end of today
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    ); // Midnight of today
    const todayEnd = new Date(
      todayStart.getFullYear(),
      todayStart.getMonth(),
      todayStart.getDate() + 1
    ); // Midnight of tomorrow

    // Query to find interviews scheduled for today
    const interviews = await lineupModel.countDocuments({
      interviewDate: { $gte: todayStart, $lt: todayEnd },
    });

    return interviews;
  } catch (error) {
    console.error("Error fetching interviews:", error);
    throw error;
  }
}

const getYesterdayInterviews = async ()  =>{
  try {
    // Get today's date and time
    const today = new Date();

    // Calculate start and end of yesterday
    const yesterdayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1
    ); // Midnight of yesterday
    const yesterdayEnd = new Date(
      yesterdayStart.getFullYear(),
      yesterdayStart.getMonth(),
      yesterdayStart.getDate() + 1
    ); // Midnight of today

    // Query to find interviews scheduled for yesterday
    const interviews = await lineupModel.countDocuments({
      interviewDate: { $gte: yesterdayStart, $lt: yesterdayEnd },
    });

    return interviews;
  } catch (error) {
    console.error("Error fetching interviews:", error);
    throw error;
  }
}

module.exports = {
  getTomorrowInterviews ,  getTodayInterviews  , getYesterdayInterviews
}