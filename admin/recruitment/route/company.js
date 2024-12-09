const { AdminserviceRoles } = require("../../../helper/rolecontrol");
const { admin_check_token } = require("../../core/authorisation");
const { adminValidation } = require("../../core/validation/auth");
const {
  adminretrievecompanyController,
  admincreatecompanyController,
  adminupdatecompanyController,
  adminretrievesinglecompanyController,
  admindeletecompanyController,
} = require("../controller/company");
const {
  admincreatecompanyValidation,
  admindeletecompanyValidation,
  adminupdatecompanyValidation,
  adminretrievecompanyValidation,
} = require("../core/validation/company");

const router = require("express").Router();
router.post(
  "/create/company",
  admincreatecompanyValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'manager',  ]),
  admin_check_token,
  admincreatecompanyController
);
router.post(
  "/delete/company",
  admindeletecompanyValidation,
  AdminserviceRoles([  "superAdmin"  ]),
  admin_check_token,
  admindeletecompanyController
);
router.post(
  "/update/company",
  adminupdatecompanyValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'manager',  ]),
  admin_check_token,
  adminupdatecompanyController
);
router.get(
  "/retrieve/all/company/:adminid",
  adminValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'recruiter' , 'officeassistant' ,'manager', 'teamleader' ]),
  admin_check_token,
  adminretrievecompanyController
);
router.get(
  "/retrieve/single/company/:adminid/:companyid",
  adminretrievecompanyValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'manager',  ]),
  admin_check_token,
  adminretrievesinglecompanyController
);

  (module.exports = router);
