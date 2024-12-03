const mongoose = require('mongoose');
const { lineupModel } = require('./your-lineup-model'); // Adjust the path as needed

async function getAdminStats() {
  try {
    const result = await lineupModel.aggregate([
      {
        // Step 1: Group by adminid and count occurrences
        $group: {
          _id: '$adminid',  // Group by adminid
          count: { $sum: 1 } // Count occurrences
        }
      },
      {
        // Step 2: Lookup to join with the Admin model and get admin name
        $lookup: {
          from: 'admins', // The collection name of the Admin model
          localField: '_id', // The field we want to match in the Admin collection
          foreignField: '_id', // The field in Admin collection to match
          as: 'adminInfo' // The name of the field to store the lookup result
        }
      },
      {
        // Step 3: Project the fields you want in the final output
        $project: {
          // Concatenate first name and last name into a full name
          adminName: {
            $concat: [
              { $arrayElemAt: ['$adminInfo.firstName', 0] }, // First Name
              ' ', // Add a space between first and last name
              { $arrayElemAt: ['$adminInfo.lastName', 0] }  // Last Name
            ]
          },
          count: 1 // Keep the count field
        }
      }
    ]);

    console.log(result);
    return result;
  } catch (error) {
    console.error('Error aggregating data:', error);
  }
}

// Call the function to get the result
getAdminStats();
