const { AdminserviceRoles } = require("../../helper/rolecontrol");
const {
  adminSignupController,
  adminLoginController,
  adminNewPasswordLink,
  adminresetPassword,
  adminprofileController,
} = require("../app/controller/auth");
const { admin_check_token } = require("../core/authorisation");
const {
  adminsignupValidation,
  adminforgotpasswordValidation,
  adminLoginValidation,
  adminResetpasswordValidation,
  adminValidation,
} = require("../core/validation/auth");

const router = require("express").Router();

router.post(
  "/signup",
  adminsignupValidation,
  // AdminserviceRoles(["admin", "superAdmin"]),
  adminSignupController
);
router.post("/login", adminLoginValidation, adminLoginController)
router.post(
  "/forgot/password",
  adminforgotpasswordValidation,
  adminNewPasswordLink
);
router.post(
  "/reset/password",
  adminResetpasswordValidation,
  adminresetPassword
);
router.post(
  "/profile",
  adminValidation,
  admin_check_token,
  adminprofileController
);

module.exports = router;
