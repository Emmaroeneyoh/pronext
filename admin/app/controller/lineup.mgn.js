const { lineupModel } = require("../../core/db/lineup");
const { adminupdatelineupModel } = require("../model/lineup.mgn");
const nodemailer = require('nodemailer');
const { appPassword } = require("../../../helper/core/utils");
const { handleError, getcurrentdate } = require("../../core/utils");

const admindeletelineupController = async (req, res, next) => {
  try {
    const { lineupid } = req.body;

    const deletelineup = await lineupModel.findByIdAndDelete(lineupid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: deletelineup,
    });
  } catch (error) {
    console.log(error);
    // return handleError(error.message)(res);
  }
};

const adminupdatelineupController = async (req, res, next) => {
  const recruitform = req.body;
  const lineupid = req.body.lineupid;
    try {
    const data = {
      recruitform,
      lineupid,
    };
    let trainee = await adminupdatelineupModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminupdatelineupstatusController = async (req, res, next) => {
  const { status, lineupid } = req.body;
    try {
      console.log('update status')
      const xdate = getcurrentdate();
   
    const form = await lineupModel.findByIdAndUpdate(lineupid, {
      $set: {
        lineUpStatus:status,updated_at:xdate
      },
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};

const adminsendlineupnotificationcontroller = async (req, res) => {
  const { emails, notification } = req.body;

  try {
    //start of nodemailer
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "emmaroeneyoh@gmail.com",

        pass: appPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: "emmaroeneyoh@gmail.com",
      to: `${emails}`,
      subject: "Nodemailer Project",
      text: notification,
      // html: data,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    //end of nodemailer
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "mail sent through",
    });
  } catch (error) {
    console.log(error);
    return handleError(error.message)(res);
  }
};
module.exports = {
  admindeletelineupController,
  adminupdatelineupController,
  adminupdatelineupstatusController,
  adminsendlineupnotificationcontroller
};
