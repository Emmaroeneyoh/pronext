const { lineupModel } = require("../../../core/db/lineup");

const toplocationrecuiterdata = async (date) => {
  const { start_date, end_date } = date;
  // Convert the provided date string into a Date object (to match the format of `createdAt`)
  const startOfDay = new Date(start_date);
  const endOfDay = new Date(end_date);
  endOfDay.setHours(23, 59, 59, 999); // Ensure endOfDay includes the full end date

  const result = await lineupModel.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startOfDay, // Start of the day
          $lt: endOfDay, // Start of the next day (exclusive)
        },
      },
    },
    {
      // Step 1: Group by adminid and count occurrences
      $group: {
        _id: "$location", // Group by adminid
        count: { $sum: 1 }, // Count occurrences
      },
    },
    {
      // Step 2: Lookup to join with the Admin model and get admin name
      $lookup: {
        from: "locations", // The collection name of the Admin model
        localField: "_id", // The field we want to match in the Admin collection
        foreignField: "_id", // The field in Admin collection to match
        as: "adminInfo", // The name of the field to store the lookup result
      },
    },
    {
      // Step 3: Project the fields you want in the final output
      $project: {
        // Concatenate first name and last name into a full name
        name: {
          $concat: [
            { $arrayElemAt: ["$adminInfo.name", 0] }, // First Name
          ],
        },
        count: 1, // Keep the count field
      },
    },
    { $limit: 10 },
  ]);

  // If no documents are found, return 0
  // const totalDocuments = result.length > 0 ? result[0].totalDocuments : 0;

  return result;
};
const topselectlocationrecuiterdata = async (date) => {
  const { start_date, end_date } = date;
  // Convert the provided date string into a Date object (to match the format of `createdAt`)
  const startOfDay = new Date(start_date);
  const endOfDay = new Date(end_date);
  endOfDay.setHours(23, 59, 59, 999); // Ensure endOfDay includes the full end date

  const result = await lineupModel.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startOfDay, // Start of the day
          $lt: endOfDay, // Start of the next day (exclusive)
        },
        status: "select",
      },
    },
    {
      // Step 1: Group by adminid and count occurrences
      $group: {
        _id: "$location", // Group by adminid
        count: { $sum: 1 }, // Count occurrences
      },
    },
    {
      // Step 2: Lookup to join with the Admin model and get admin name
      $lookup: {
        from: "locations", // The collection name of the Admin model
        localField: "_id", // The field we want to match in the Admin collection
        foreignField: "_id", // The field in Admin collection to match
        as: "adminInfo", // The name of the field to store the lookup result
      },
    },
    {
      // Step 3: Project the fields you want in the final output
      $project: {
        // Concatenate first name and last name into a full name
        name: {
          $concat: [
            { $arrayElemAt: ["$adminInfo.name", 0] }, // First Name
          ],
        },
        count: 1, // Keep the count field
      },
    },
    { $limit: 10 },
  ]);

  // If no documents are found, return 0
  // const totalDocuments = result.length > 0 ? result[0].totalDocuments : 0;

  return result;
};
const topjoinerlocationrecuiterdata = async (date) => {
  const { start_date, end_date } = date;
  // Convert the provided date string into a Date object (to match the format of `createdAt`)
  const startOfDay = new Date(start_date);
  const endOfDay = new Date(end_date);
  endOfDay.setHours(23, 59, 59, 999); // Ensure endOfDay includes the full end date

  const result = await lineupModel.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startOfDay, // Start of the day
          $lt: endOfDay, // Start of the next day (exclusive)
        },
        status: "joiner",
      },
    },
    {
      // Step 1: Group by adminid and count occurrences
      $group: {
        _id: "$location", // Group by adminid
        count: { $sum: 1 }, // Count occurrences
      },
    },
    {
      // Step 2: Lookup to join with the Admin model and get admin name
      $lookup: {
        from: "locations", // The collection name of the Admin model
        localField: "_id", // The field we want to match in the Admin collection
        foreignField: "_id", // The field in Admin collection to match
        as: "adminInfo", // The name of the field to store the lookup result
      },
    },
    {
      // Step 3: Project the fields you want in the final output
      $project: {
        // Concatenate first name and last name into a full name
        name: {
          $concat: [
            { $arrayElemAt: ["$adminInfo.name", 0] }, // First Name
          ],
        },
        count: 1, // Keep the count field
      },
    },
    { $limit: 10 },
  ]);

  // If no documents are found, return 0
  // const totalDocuments = result.length > 0 ? result[0].totalDocuments : 0;

  return result;
};

module.exports = {
  toplocationrecuiterdata,
  topselectlocationrecuiterdata,
  topjoinerlocationrecuiterdata,
};
