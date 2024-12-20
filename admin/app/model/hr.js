const { contactusModel } = require("../../../user/core/db/contactus");
const { findjobModel } = require("../../../user/core/db/find.work");
const { hiretalentModel } = require("../../../user/core/db/hire.talent");
const { AdminModel } = require("../../core/db/admin");

const adminupdateprofileModel = async (data, res) => {
  try {
    const {
      lastname,
      firstname,
      userEmail,
      address,
      phone,
      dob,
      nationality,
      state,
      city,
      gender,
      middlename,
      maritalstatus,
      adminid,
      role,
      recruiter_active,
      teamleader,
      status,  staffid
    } = data;

    const form = await AdminModel.findByIdAndUpdate(staffid, {
      $set: {
        
        'basic_info.email': userEmail,
        'basic_info.phone':phone,
        'basic_info.dob':dob,
        'basic_info.lastname':lastname,
        'basic_info.firstname':firstname,
        'basic_info.middlename':middlename,
        'basic_info.gender':gender,
        'basic_info.maritalstatus':maritalstatus,
        
        address_details: { nationality, state, city, address },
        administrative: { status, role },
        recruiter: { teamleader, recruiter_active },
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
    // return handleError(error.message)(res)
  }
};
const adminupdateroleModel = async (data, res) => {
  try {
    const { role, status, staffid } = data;

    const form = await AdminModel.findByIdAndUpdate(staffid, {
      $set: {
        administrative: { status, role },
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
    // return handleError(error.message)(res)
  }
};
const adminupdatepasswordModel = async (data, res) => {
  try {
    const { Harshpassword, adminid , staffid} = data;

    const form = await AdminModel.findByIdAndUpdate(staffid, {
      $set: {
        "basic_info.password": Harshpassword,
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
    // return handleError(error.message)(res)
  }
};
const adminretrieveteamleaderModel = async (data, res) => {
  try {
    const form = await AdminModel.find({
      "administrative.role": "team leader",
    });

    return form;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
    // return handleError(error.message)(res)
  }
};
const admindeleteadminModel = async (data, res) => {
  try {
    const { staffid } = data;
    const form = await AdminModel.findAndDelete(staffid);

    return form;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
    // return handleError(error.message)(res)
  }
};

const admindashboardModel = async (data, res) => {
  try {
    let fourteenDaysAgo = new Date();
    fourteenDaysAgo.setUTCHours(0, 0, 0, 0); // Set time to midnight in UTC
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const dateString = fourteenDaysAgo.toISOString();

    const contactus = await contactusModel
      .find({ createdAt: { $gte: dateString } })
      .sort({ createdAt: -1 });
    const hiretalent = await hiretalentModel
      .find({ createdAt: { $gte: dateString } })
      .sort({ createdAt: -1 });
    const findjob = await findjobModel
      .find({ createdAt: { $gte: dateString } })
      .sort({ createdAt: -1 });
    const totaldata = [...contactus, ...hiretalent, ...findjob];

    const totalcontactus = await contactusModel.countDocuments();
    const totalhiretalent = await hiretalentModel.countDocuments();
    const totalfindjob = await findjobModel.countDocuments();

    const totalform = totalcontactus + totalhiretalent + totalfindjob;

    const dashboard = {
      totaldata,
      totalcontactus,
      totalhiretalent,
      totalfindjob,
      totalform,
    };

    return dashboard;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
    // return handleError(error.message)(res)
  }
};

module.exports = {
  adminupdateprofileModel,
  adminupdatepasswordModel,
  admindashboardModel,
  adminretrieveteamleaderModel,
  admindeleteadminModel,
  adminupdateroleModel,
};
