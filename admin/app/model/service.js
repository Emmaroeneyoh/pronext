const { serviceModel } = require("../../core/db/service");


const admincreateserviceModel = async (data, res) => {
    try {
      const {
        description , photo , tag , city , category , title 
      } = data;
  
      const form = await new serviceModel({
        description , photo , tag , city , category , title 
      });
      const productDetails = await form.save()
     
  
      return productDetails;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
      // return handleError(error.message)(res)
    }
};
const adminupdateserviceModel = async (data, res) => {
    try {
      const {
        description , photo , tag , city , category , title , serviceid
      } = data;
  
      const form = await serviceModel.findByIdAndUpdate(serviceid, {
        $set: {
            description , photo , tag , city , category , title ,
        },
      });
     
  
      return productDetails;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
      // return handleError(error.message)(res)
    }
};

module.exports = {
    admincreateserviceModel  ,  adminupdateserviceModel
}