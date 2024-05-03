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
    if (type.includes("findjob")) {
      if (query.$and.length > 0) {
        findjobdata = await findjobModel.find(query).skip(skip).limit(limit) 
      } else {
        findjobdata = await findjobModel.find().skip(skip).limit(limit);
        }
        obj.totaldata.push(...findjobdata);
    }

    if (type.includes("hiretalent")) {
      if (query.$and.length > 0) {
        hiretalent = await hiretalentModel.find(query).skip(skip).limit(limit);
      } else {
        hiretalent = await hiretalentModel.find().skip(skip).limit(limit);
        }
        obj.totaldata.push(...hiretalent);
    }
      if (type.includes("contactus")) {
        
      if (query.$and.length > 0) {
        contactus = await contactusModel.find(query).skip(skip).limit(limit);
      } else {
          contactus = await contactusModel.find().skip(skip).limit(limit);
          }
          obj.totaldata.push(...contactus);
    } else if (type == "All") {
      const halflimit = limit / 2;
      skip = (page - 1) * halflimit;
      if (query.$and.length > 0) {
        contactus = await contactusModel
          .find(query)
          .skip(skip)
          .limit(halflimit);
        hiretalent = await hiretalentModel
          .find(query)
          .skip(skip)
          .limit(halflimit);
        findjob = await findjobModel.find(query).skip(skip).limit(halflimit);
      } else {
        contactus = await contactusModel.find().skip(skip).limit(halflimit);
        hiretalent = await hiretalentModel.find().skip(skip).limit(halflimit);
        findjob = await findjobModel.find().skip(skip).limit(halflimit);
      }

       obj.totaldata = [...contactus, ...hiretalent, ...findjob];
      
      }
      
       return obj
  } catch (error) {
      console.log('poleis', error);
      obj.status = false
      obj.message = error.message
    return obj
    // handleError(error.message)(res)
  }
};


module.exports = {
    adminretrieveformsmodel
}