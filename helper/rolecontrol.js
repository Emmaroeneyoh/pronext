const { AdminModel } = require("../admin/core/db/admin");

const AdminserviceRoles = (roles) => {
  return async (req, res, next) => {
    try {
      // Extract the admin ID from the request body or params
      const adminid = req.body.adminid || req.params.adminid;

      // Find the admin in the database
      const checkrole = await AdminModel.findById(adminid);
      if (!checkrole) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "admin doesn't exist",
        });
      }

      // Get the admin's role
      const adminrole = checkrole.administrative.role;
      console.log("rolew", adminrole);

      // Check if the role is authorized
      if (roles.includes(adminrole)) {
        return next(); // Proceed to the next middleware or controller
      } else {
        // Admin does not have the required roles
        return res.status(403).json({
          status_code: 403,
          status: false,
          message: "access denied",
        });
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error in AdminserviceRoles middleware:", error);
      return res.status(500).json({
        status_code: 500,
        status: false,
        message: "internal server error",
      });
    }
  };
};

module.exports = {
  AdminserviceRoles,
};
