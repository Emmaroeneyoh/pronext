const express = require("express");
//using the env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const cors = require("cors");
const app = express();
const { coonectdb } = require("./helper/connectdb");


//admin
const adminauth = require('./admin/route/auth')
const adminservice = require('./admin/route/service')
const admincountry = require('./admin/route/country')
const adminhr = require('./admin/route/hr')
const adminuser = require('./admin/route/user')

//recruiter
const admincompany = require('./admin/recruitment/route/company')
const adminlocation = require('./admin/recruitment/route/location')

//admin education , experience
const admineducationexperience = require('./admin/route/eductaion.experince')


//user
const userhire = require('./user/route/hirejob')
const { PORT } = require("./helper/core/utils");

coonectdb()
app.use(cors());
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const user = '/user'
const admin = '/admin'

//for admin recruitment
app.use(admin, admincompany) 
app.use(admin, adminlocation) 
//for admin
app.use(admin, adminauth) 
app.use(admin, adminservice) 
app.use(admin, adminhr) 
app.use(admin, adminuser) 
app.use(admin, admineducationexperience) 
app.use(admin, admincountry) 

//for user
app.use(user, userhire) 


//error handler
app.use((req, res, next) => {
  const error = new Error("api not found");
  error.status = 404;
  res.status(404).json({
    status_code: 404,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.status(500).json({
    status_code: 500,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

const port = PORT;
app.listen(port, () => {
  console.log("server connected", port);
});
