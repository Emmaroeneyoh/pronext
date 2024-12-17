const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { adminJWT } = require("../../helper/core/utils");

const age = 1 * 24 * 60 * 60;
const create_admin_token = (admin) => {
  return jwt.sign({ admin }, adminJWT, {
    expiresIn: age,
  });
};
const handleError = (err) => (res) => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
};

const verifymongoodeId = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "invalid ID type",
      error: "invalid ID type",
    });
  }
};

const getcurrentdate = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");

  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
};

const checktime10pm_12am = () => {
  const now = new Date();
  const currentHour = now.getHours();

  // Check if the current hour is outside 10 PM to 12 AM
  if (currentHour < 22 && currentHour >= 0) {
    return true; // Not between 10 PM and 12 AM
  } else if (currentHour >= 0 && currentHour < 22) {
    return false;
  }
};
module.exports = {
  create_admin_token,
  handleError,
  verifymongoodeId,
  getcurrentdate,
  checktime10pm_12am,
};
