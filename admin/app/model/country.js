const { countryModel } = require("../../core/db/country");
const { groupModel } = require("../../core/db/group");




const admincreatecountryModel = async (data, res) => {
    try {
      const {
            name , flag , continent , note , adminid
      } = data;
  
      const form = await new countryModel({
             name , flag , continent , note ,   createdBy:adminid 
      });
      const productDetails = await form.save()
 
  
      return productDetails;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};

const updatecountryModel = async (data, res) => {
  try {
    const { name,
      flag,
      continent,
      note, adminid , countryid} = data;

    const form = await countryModel.findByIdAndUpdate(countryid, {
      $set: {
        name , flag , continent , note ,   createdBy:adminid 
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const admincreategroupModel = async (data, res) => {
    try {
      const {
        groupname , teamleader
      } = data;
  
      const form = await new groupModel({
             name : groupname , teamleader
      });
      const productDetails = await form.save()
 
  
      return productDetails;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};



module.exports = {
    admincreatecountryModel ,  updatecountryModel , admincreategroupModel
}