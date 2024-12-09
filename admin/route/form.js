const { AdminserviceRoles } = require("../../helper/rolecontrol");
const { admincreaterecruitformController,
    adminupdaterecruitformController,
adminretrievesinglerecruitformController,
adminretrieverecruitformController,
} = require("../app/controller/form");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const {
  adminsingleformValidation,
  adminupdateformValidation,
  admincreateformValidation,
} = require("../core/validation/form");

const router = require("express").Router();
router.post(
  "/create/form",
  admincreateformValidation,
  AdminserviceRoles(["admin", "superAdmin"]),
  admin_check_token,
  admincreaterecruitformController
);
router.post(
  "/update/form",
  adminupdateformValidation,
  AdminserviceRoles(["admin", "superAdmin"]),
  admin_check_token,
  adminupdaterecruitformController
);
router.get(
  "/retrieve/single/dynamicform/:adminid/:formid",
  adminsingleformValidation,
  AdminserviceRoles(["admin", "superAdmin"]),
  admin_check_token,
  adminretrievesinglerecruitformController
);
router.get(
  "/retrieve/all/dynamicform/:adminid",
  adminValidation,
  AdminserviceRoles(["admin", "superAdmin"]),
  admin_check_token,
  adminretrieverecruitformController
);

 module.exports = router
