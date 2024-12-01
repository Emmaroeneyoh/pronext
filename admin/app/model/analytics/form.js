const { formModel } = require("../../../core/db/form");
const { contactusModel } = require("../../../../user/core/db/contactus")


const totalformdata = async (date) => {
    const {start_date , end_date} = date
    // Convert the provided date string into a Date object (to match the format of `createdAt`)
    const startOfDay = new Date(start_date);
    const endOfDay = new Date(end_date);
    endOfDay.setHours(23, 59, 59, 999); // Ensure endOfDay includes the full end date
  
    const result = await formModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startOfDay, // Start of the day
            $lt: endOfDay, // Start of the next day (exclusive)
          },
        },
      },
      {
        $count: "totalDocuments", // Count the number of documents
      },
    ]);
  
    // If no documents are found, return 0
    const totalDocuments = result.length > 0 ? result[0].totalDocuments : 0;
  
    return totalDocuments;
  };
const totalcontactformdata = async (date) => {
    // Convert the provided date string into a Date object (to match the format of `createdAt`)
    const {start_date , end_date} = date
    // Convert the provided date string into a Date object (to match the format of `createdAt`)
    const startOfDay = new Date(start_date);
    const endOfDay = new Date(end_date);
    endOfDay.setHours(23, 59, 59, 999); // Ensure endOfDay includes the full end date
  
    const result = await contactusModel.aggregate([
      { 
        $match: {
          createdAt: {
            $gte: startOfDay, // Start of the day
            $lt: endOfDay, // Start of the next day (exclusive)
          },
        },
      },
      {
        $count: "totalDocuments", // Count the number of documents
      },
    ]);
  
    // If no documents are found, return 0
    const totalDocuments = result.length > 0 ? result[0].totalDocuments : 0;
  
    return totalDocuments;
};
  
module.exports = {
    totalcontactformdata, totalformdata
}