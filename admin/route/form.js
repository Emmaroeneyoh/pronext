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
  admin_check_token,
  admincreaterecruitformController
);
router.post(
  "/update/form",
  adminupdateformValidation,
  admin_check_token,
  adminupdaterecruitformController
);
router.get(
  "/retrieve/single/dynamicform/:adminid/:formid",
  adminsingleformValidation,
  admin_check_token,
  adminretrievesinglerecruitformController
);
router.get(
  "/retrieve/all/dynamicform/:adminid",
  adminValidation,
  admin_check_token,
  adminretrieverecruitformController
);



  module.exports = router
