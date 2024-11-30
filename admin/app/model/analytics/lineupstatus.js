const { AdminModel } = require("../../../core/db/admin");
const { lineupModel } = require("../../../core/db/lineup");
const { companyModel } = require("../../../recruitment/core/db/company");
const { locationModel } = require("../../../recruitment/core/db/location");

const lineupstatusdata = async (date) => {
  const statuses = [
    "Induction",
    "Billing",
    "Confirm",
    "Walk in",
    "Select",
    "Joined",
    "ClawBack",
    "Induction",
  ]; // List of statuses to check

  const result = await lineupModel.aggregate([
    {
      $match: {
        updated_at: date, // Match the exact date string
        lineUpStatus: { $in: statuses }, // Filter for relevant statuses
      },
    },
    {
      $group: {
        _id: "$lineUpStatus",
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: null,
        data: { $push: { k: "$_id", v: "$count" } },
      },
    },
    {
      $replaceRoot: {
        newRoot: { $arrayToObject: "$data" },
      },
    },
  ]);

  // Initialize the result as an object with all statuses set to 0
  const finalResult = statuses.reduce((acc, status) => {
    acc[status] = 0; // Initialize each status with 0
    return acc;
  }, {});

  // If we have any data, merge it with the initialized result
  if (result.length > 0) {
    Object.assign(finalResult, result[0]);
  }

  return finalResult;
};
const totallineupdata = async (date) => {
  // Convert the provided date string into a Date object (to match the format of `createdAt`)
  const startOfDay = new Date(date);
  const endOfDay = new Date(date);
  endOfDay.setDate(startOfDay.getDate() + 1); // Move to the next day to get the range

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
      $count: "totalDocuments", // Count the number of documents
    },
  ]);

  // If no documents are found, return 0
  const totalDocuments = result.length > 0 ? result[0].totalDocuments : 0;

  return totalDocuments;
};
const totalcompanydata = async (date) => {
  // Convert the provided date string into a Date object (to match the format of `createdAt`)
  const startOfDay = new Date(date);
  const endOfDay = new Date(date);
  endOfDay.setDate(startOfDay.getDate() + 1); // Move to the next day to get the range

  const result = await companyModel.aggregate([
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
const totallocationdata = async (date) => {
  // Convert the provided date string into a Date object (to match the format of `createdAt`)
  const startOfDay = new Date(date);
  const endOfDay = new Date(date);
  endOfDay.setDate(startOfDay.getDate() + 1); // Move to the next day to get the range

  const result = await locationModel.aggregate([
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
const totalrecruiterdata = async (date) => {
  // Convert the provided date string into a Date object (to match the format of `createdAt`)
  const startOfDay = new Date(date);
  const endOfDay = new Date(date);
  endOfDay.setDate(startOfDay.getDate() + 1); // Move to the next day to get the range

  const result = await AdminModel.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startOfDay, // Start of the day
          $lt: endOfDay, // Start of the next day (exclusive)
        },
        "administrative.role": "recruiter",
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
  lineupstatusdata,
  totallineupdata,
  totallocationdata,
  totalcompanydata,totalrecruiterdata
};
