const mongoose = require("mongoose");
const { lineupModel } = require("./path/to/your/model");



async function getTotalDocumentsForDate(date) {
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

  console.log({ totalDocuments });
  return { totalDocuments };
}

// Example Usage
const date = "2024-10-16"; // Example date
getTotalDocumentsForDate(date).then(console.log).catch(console.error);
