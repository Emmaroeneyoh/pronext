
const nodemailer = require("nodemailer");
const { appPassword } = require("./core/utils");

// Function to send emails
const sendEmail = async ( email, password) => {
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
     
        const link = ` this is your login credentials EMAIL : ${email}  ,  PASSWORD ${password}`
      var mailOptions = {
        from: "emmaroeneyoh@gmail.com",
        to: `${email}`,
        subject: "Login credentials",
        text: link,
        // html: data,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
            console.log("Email sent: " + info.response);
            return true
        }
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return false; // Return false if there's an error sending the email
    }
};
  
module.exports = {
    sendEmail
}