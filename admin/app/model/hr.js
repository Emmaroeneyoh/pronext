const { AdminModel } = require("../../core/db/admin");


const adminupdateprofileModel = async (data, res) => {
  console.log('polsidfte' , data)
    try {
      const {
        lastname, firstname, useremail, address, photo, phone, dob , staffid
      } = data;
  
      const form = await AdminModel.findByIdAndUpdate(staffid, {
        $set: {
            lastname, firstname,address, photo, phone, dob , email : useremail
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