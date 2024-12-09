const { AdminserviceRoles } = require("../../helper/rolecontrol");
const {
  admincreatedasboardinfoController,
  adminupdatedasboardinfoController,
  admindeletedasboardinfoController,
  adminretrievesingledasboardinfoController,
  adminretrievealldasboardinfoController,
} = require("../app/controller/dashboardinformation");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const {
  admincreatedashboardValidation,
  adminupdatedashboardValidation,
  adminsingledashboardValidation,
  adminretrievesingledashboardValidation,
} = require("../core/validation/dashboardinfo");

const router = require("express").Router();
router.post(
  "/create/dashboard/info",
  admincreatedashboardValidation,
  AdminserviceRoles(["admin", "superAdmin", "officeassistant", "manager"]),
  admin_check_token,
  admincreatedasboardinfoController
);
router.post(
  "/update/dashboard/info",
  adminupdatedashboardValidation,
  AdminserviceRoles(["admin", "superAdmin", "officeassistant", "manager"]),
  admin_check_token,
  adminupdatedasboardinfoController
);
router.post(
  "/delete/dashboard/info",
  adminsingledashboardValidation,
  AdminserviceRoles(["superAdmin"]),
  admin_check_token,
  admindeletedasboardinfoController
);
router.get(
  "/retrieve/single/dashboard/info/:adminid/:dashboardinfoid",
  adminretrievesingledashboardValidation,
  AdminserviceRoles(["admin", "superAdmin", "officeassistant", "manager"]),
  admin_check_token,
  adminretrievesingledasboardinfoController
);
router.get(
  "/retrieve/all/dashboard/info/:adminid",
  adminValidation,
  AdminserviceRoles(["admin", "superAdmin", "officeassistant", "manager"]),
  admin_check_token,
  adminretrievealldasboardinfoController
);

module.exports = router;
