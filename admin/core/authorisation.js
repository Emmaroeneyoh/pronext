const jwt = require('jsonwebtoken');
const { adminJWT } = require('../../helper/core/utils');
const { AdminModel } = require('./db/admin');



const admin_check_token = async (req, res, next) => {
  let admin = req.body.adminid || req.params.adminid
  
    const checkuser = await AdminModel.findById(admin)
  if (!checkuser) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "admin does not exist",
  
      error: "admin does not exist",
    });
  }
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1] // gotten the token, now we will decode it

          const decoded = jwt.verify(token, adminJWT)
        const user = decoded.admin
        console.log('user as' , user)
        if (admin != user.adminid) {
          console.log('posis' )
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
         }

       next()
      } catch (error) {
        console.log(error)
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
      }
    }
    if (!token) {
        return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
    }
}



module.exports = {
    admin_check_token 
}