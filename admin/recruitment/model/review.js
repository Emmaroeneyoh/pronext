const { lineupreviewModel } = require("../core/db/review");



const retrieveallLineupReviewmodel= async () => {
    try {
      const result = await lineupreviewModel.aggregate([
        // Step 1: Group by lineupid to ensure uniqueness
        {
          $group: {
            _id: "$lineupid", // Group by lineupid to get unique records
            createdAt: { $first: "$createdAt" }, // Get the createdAt date
          },
        },
        // Step 2: Lookup to join with the lineup collection
        {
          $lookup: {
            from: "lineups", // Name of the lineup collection
            localField: "_id", // The grouped field
            foreignField: "_id", // The field in the lineup collection to match
            as: "lineupData", // The name for the joined data
          },
        },
        // Step 3: Unwind the lineup data to flatten the array
        {
          $unwind: {
            path: "$lineupData",
            preserveNullAndEmptyArrays: true, // Keep the documents even if no match is found
          },
        },
        // Step 4: Lookup to join with the company collection
        {
          $lookup: {
            from: "companies", // Name of the company collection
            localField: "lineupData.company", // The field in lineupData to match (ensure this is the correct field)
            foreignField: "_id", // The field in the company collection to match
            as: "companyData", // The name for the joined data
          },
        },
        // Step 5: Unwind the company data to flatten the array
        {
          $unwind: {
            path: "$companyData",
            preserveNullAndEmptyArrays: true, // Keep the documents even if no match is found
          },
        },
        // Step 6: Project the final output
        {
          $project: {
            _id: 0, // Exclude the default _id
            lineupid: "$_id", // Include the unique lineupid
            createdAt: 1, // Include createdAt
            firstName: "$lineupData.firstName", // Include the lineup name
            middleName: "$lineupData.middleName", // Include the lineup name
            lastName: "$lineupData.lastName", // Include the lineup name
            companyName: "$companyData.name", // Include the company name
          },
        },
      ]);
  
      return result;
    } catch (error) {
      console.log("Error retrieving unique lineup review data:", error);
      throw error; // Rethrow the error for further handling
    }
  };
  

module.exports = {
    retrieveallLineupReviewmodel
  }