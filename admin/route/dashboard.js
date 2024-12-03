const { admincreatedasboardinfoController, adminupdatedasboardinfoController, admindeletedasboardinfoController, adminretrievesingledasboardinfoController, adminretrievealldasboardinfoController } = require("../app/controller/dashboardinformation");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { admincreatedashboardValidation, adminupdatedashboardValidation, adminsingledashboardValidation, adminretrievesingledashboardValidation } = require("../core/validation/dashboardinfo");


const router = require("express").Router();
router.post(
  "/create/dashboard/info",
  admincreatedashboardValidation,
  admin_check_token,
  admincreatedasboardinfoController
);
router.post(
  "/update/dashboard/info",
  adminupdatedashboardValidation,
  admin_check_token,
  adminupdatedasboardinfoController
);
router.post(
  "/delete/dashboard/info",
  adminsingledashboardValidation,
  admin_check_token,
  admindeletedasboardinfoController
);
router.get(
  "/retrieve/single/dashboard/info/:adminid/:dashbaordinfoid",
  adminretrievesingledashboardValidation,
  admin_check_token,
  adminretrievesingledasboardinfoController
);
router.get(
  "/retrieve/all/dashboard/info/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievealldasboardinfoController
);


module.exports = router