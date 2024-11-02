const { contactusModel } = require("../../../user/core/db/contactus");
const { findjobModel } = require("../../../user/core/db/find.work");
const { hiretalentModel } = require("../../../user/core/db/hire.talent");

const adminretrieveformsmodel = async (data, res) => {
    let obj = {
        status: true,
        message : "",
        totaldata : []        
    }
  try {
    const { page, limit, skip, type , query } = data;
    console.log(query.$and.length);
    let findjobdata = []
    let hiretalent = []
      let contactus = []
      let formdata = []
      let limitdata = 3
    if (type.includes("findjob")) {
      if (query.$and.length > 0) {
        findjobdata = await findjobModel.aggregate([
            { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: limitdata } // Limit the number of documents returned
          ])
      } else {
        findjobdata = await findjobModel.aggregate([
            // { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: limitdata } // Limit the number of documents returned
          ])
        }
        obj.totaldata.push(...findjobdata);
    }

    if (type.includes("hiretalent")) {
      if (query.$and.length > 0) {
        hiretalent = await hiretalentModel.aggregate([
            { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: limitdata } // Limit the number of documents returned
          ])
      } else {
        hiretalent = await hiretalentModel.aggregate([
            // { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: limitdata } // Limit the number of documents returned
          ])
        }
        obj.totaldata.push(...hiretalent);
    }
      if (type.includes("contactus")) {
        
      if (query.$and.length > 0) {
        contactus = await contactusModel.aggregate([
            { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: limitdata } // Limit the number of documents returned
          ])
      } else {
          contactus = await contactusModel.aggregate([
            // { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: limitdata } // Limit the number of documents returned
          ])
          }
          obj.totaldata.push(...contactus);
    } else if (type == "All") {
      const halflimit = limit / 2;
      skip = (page - 1) * halflimit;
      if (query.$and.length > 0) {
        contactus = await contactusModel
          .aggregate([
            { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: halflimit } // Limit the number of documents returned
          ])
        hiretalent = await hiretalentModel
          .aggregate([
            { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: halflimit } // Limit the number of documents returned
          ])
        findjob = await findjobModel.aggregate([
            { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: halflimit } // Limit the number of documents returned
          ])
      } else {
        contactus = await contactusModel.aggregate([
            // { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: halflimit } // Limit the number of documents returned
          ])
        hiretalent = await hiretalentModel.aggregate([
            // { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: halflimit} // Limit the number of documents returned
          ])
        findjob = await findjobModel.aggregate([
            // { $match: query },  // Match your query conditions
            { $addFields: { createdAtDate: { $toDate: "$createdAt" } } }, // Convert createdAt string to Date
            { $sort: { createdAtDate: -1 } }, // Sort by the converted Date field
            { $skip: skip }, // Skip documents
            { $limit: halflimit } // Limit the number of documents returned
          ])
      }

       obj.totaldata = [...contactus, ...hiretalent, ...findjob];
      
      }
      
       return obj
  } catch (error) {
      console.log('poleis', error);
      obj.status = false
      obj.message = error.message
    return obj
    // return handleError(error.message)(res)
  }
};
const adminupdateformstatusmodel = async (data, res) => {
   
  try {
    const { formid , status , type } = data;
    if (type == "findjob") {
        let trainee = await findjobModel.findByIdAndUpdate(formid, {
            $set: {
                status
            },
          });
        return  trainee;
      } else if (type == "hiretalent") {
        let trainee = await hiretalentModel.findByIdAndUpdate(formid, {
            $set: {
                status
            },
          });
        return  trainee;
      } else if (type == "contactus") {
        let trainee = await contactusModel.findByIdAndUpdate(formid, {
            $set: {
                status
            },
          });
        return  trainee;
      } 
  } catch (error) {
      console.log('poleis', error);
      obj.status = false
      obj.message = error.message
    return obj
    // return handleError(error.message)(res)
  }
};


module.exports = {
    adminretrieveformsmodel , adminupdateformstatusmodel
}