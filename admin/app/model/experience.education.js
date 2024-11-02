const { educationModel } = require("../../core/db/education");
const { experienceModel } = require("../../core/db/experience");


const admincreateexperienceModel = async (data, res) => {
    try {
      const {
       name , value , adminid
      } = data;
  
      const form = await new experienceModel({
        name , value , createdBy:adminid
      });
      const productDetails = await form.save()
     
  
      return productDetails;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
      // return handleError(error.message)(res)
    }
};
const admincreateeducationModel = async (data, res) => {
    try {
      const {
       name , value , adminid
      } = data;
  
      const form = await new educationModel({
        name , value , createdBy:adminid
      });
      const productDetails = await form.save()
     
  
      return productDetails;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
      // return handleError(error.message)(res)
    }
};

module.exports = {
    admincreateexperienceModel , admincreateeducationModel
}