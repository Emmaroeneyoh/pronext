const { contactusModel } = require("../../../user/core/db/contactus");
const { findjobModel } = require("../../../user/core/db/find.work");
const { hiretalentModel } = require("../../../user/core/db/hire.talent");
const { handleError } = require("../../core/utils");
// const moment = require("moment");

const adminretrievesinglehiretalentController = async (req, res, next) => {
  const { formid } = req.params;
  try {
    let trainee = await hiretalentModel.findById(formid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const admindeletehiremeController = async (req, res, next) => {
  const { formid } = req.body;
  try {
    let trainee = await hiretalentModel.findByIdAndDelete(formid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrieveallhiretalentController = async (req, res, next) => {
  try {
    let trainee = await hiretalentModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievesinglefindjobController = async (req, res, next) => {
  const { formid } = req.params;
  try {
    let trainee = await findjobModel.findById(formid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const admindeletefindjobController = async (req, res, next) => {
  const { formid } = req.body;
  try {
    let trainee = await findjobModel.findByIdAndDelete(formid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrieveallfindjobController = async (req, res, next) => {
  try {
    let trainee = await findjobModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminretrieveformsController = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = 10;
    let skip = (page - 1) * limit;
    const type = req.query.type;
    const status = req.query.status;
    const date = req.query.date;
    console.log(date)
    var query = { $and: [] };

    if ( status && status != "") {
      query.$and.push({ status: status });
    }
  
 
    if (date && date != "") {
      const ndate = `${date}+00:00`;
      query.$and.push({ createdAt: ndate });
    }
    
    console.log(query.$and.length)
    if (type == "findjob") {
      let findjobdata
      if (query.$and.length > 0) {
        findjobdata = await findjobModel.find(query).skip(skip).limit(limit);
      } else {
        findjobdata = await findjobModel.find().skip(skip).limit(limit);
      }
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: findjobdata,
        pagination: {
          page: page,
          limit: 15,
          total: findjobdata.length, // This is not the total count, it's the count of items on this page
        },
      });
    } else if (type == "hiretalent") {
      let hiretalent
      if (query.$and.length > 0) {
        hiretalent = await hiretalentModel.find(query).skip(skip).limit(limit);
      } else {
        hiretalent = await hiretalentModel.find().skip(skip).limit(limit);
      }
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: hiretalent,
        pagination: {
          page: page,
          limit: 15,
          total: hiretalent.length, // This is not the total count, it's the count of items on this page
        },
      });
    } else if (type == "contactus") {
      let contactus
      if (query.$and.length > 0) {
        contactus = await contactusModel.find(query).skip(skip).limit(limit);
      } else {
        contactus = await contactusModel.find().skip(skip).limit(limit);
      }
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: contactus,
        pagination: {
          page: page,
          limit: 15,
          total: contactus.length, // This is not the total count, it's the count of items on this page
        },
      });
    }  else if (type == "all") {
      const halflimit = limit / 2
      skip = (page - 1) * halflimit;
        let contactus = await contactusModel.find().skip(skip).limit(halflimit);
        let hiretalent = await hiretalentModel.find().skip(skip).limit(halflimit);
      let findjob = await findjobModel.find().skip(skip).limit(halflimit);
      const formdata = { contactus, hiretalent, findjob }
        return res.status(200).json({
          status_code: 200,
          status: true,
          message: "signup process successful",
          data: formdata,
          pagination: {
            page: page,
             // This is not the total count, it's the count of items on this page
          },
        });
      }
    else {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "form type invalid",
      });
    }
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminretrievesingleformController = async (req, res, next) => {
  const { formid } = req.params;
  try {
    const type = req.query.type;
    if (type == "findjob") {
      let trainee = await findjobModel.findById(formid);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } else if (type == "hiretalent") {
      let trainee = await hiretalentModel.findById(formid);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } else if (type == "contactus") {
      let trainee = await contactusModel.findById(formid);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } else {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "invalid form type",
      });
    }
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
module.exports = {
  adminretrievesinglehiretalentController,
  adminretrieveallhiretalentController,
  admindeletehiremeController,
  adminretrieveallfindjobController,
  admindeletefindjobController,
  adminretrievesinglefindjobController,
  adminretrieveformsController,
  adminretrievesingleformController,
};
