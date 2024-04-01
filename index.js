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
const adminhr = require('./admin/route/hr')


const { PORT } = require("./helper/core/utils");

coonectdb()
app.use(cors());
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const user = '/user'
const admin = '/admin'

//for admin
app.use(admin, adminauth) 
app.use(admin, adminservice) 
app.use(admin, adminhr) 

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
