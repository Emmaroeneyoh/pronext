const { AdminModel } = require("../../core/db/admin");


const adminupdateprofileModel = async (data, res) => {
    try {
      const {
        lastname, firstname, userEmail, address, photo, phone, dob , adminid
      } = data;
  
      const form = await AdminModel.findByIdAndUpdate(adminid, {
        $set: {
            lastname, firstname,address, photo, phone, dob , email : userEmail
        },
      });
  
      return form;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};
  
module.exports = {
    adminupdateprofileModel
}