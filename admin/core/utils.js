
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { adminJWT } = require('../../helper/core/utils');

const age = 1 * 24 * 60 * 60;
const create_admin_token = (admin) => {
  return jwt.sign({ admin }, adminJWT, {
    expiresIn: age,
  });
};
const handleError = (err) => res => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
}


const verifymongoodeId = (id , res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: 'invalid ID type',
      error: 'invalid ID type',
    });
} 
 
}



module.exports = {
    create_admin_token , handleError , verifymongoodeId 
}