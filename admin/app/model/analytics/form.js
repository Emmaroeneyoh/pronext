const { formModel } = require("../../../core/db/form");
const { contactusModel } = require("../../../../user/core/db/contactus")


const totalformdata = async (date) => {
    // Convert the provided date string into a Date object (to match the format of `createdAt`)
    const startOfDay = new Date(date);
    const endOfDay = new Date(date);
    endOfDay.setDate(startOfDay.getDate() + 1); // Move to the next day to get the range
  
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
    const startOfDay = new Date(date);
    const endOfDay = new Date(date);
    endOfDay.setDate(startOfDay.getDate() + 1); // Move to the next day to get the range
  
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