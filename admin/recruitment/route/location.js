const { AdminserviceRoles } = require("../../../helper/rolecontrol");
const { admin_check_token } = require("../../core/authorisation");
const { adminValidation } = require("../../core/validation/auth");
const {
  adminretrievelocationController,
  admincreatelocationController,
  adminupdatelocationController,
  adminretrievesinglelocationController,
  admindeletelocationController,
} = require("../controller/location");
const {
  admincreatelocationValidation,
  admindeletelocationValidation,
  adminupdatelocationValidation,
  adminretrievelocationValidation,
} = require("../core/validation/location");

const router = require("express").Router();
router.post(
  "/create/location",
  admincreatelocationValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'manager',  ]),
  admin_check_token,
  admincreatelocationController
);
router.post(
  "/delete/location",
  admindeletelocationValidation,
  AdminserviceRoles([ "superAdmin"  ]),
  admin_check_token,
  admindeletelocationController
);
router.post(
  "/update/location",
  adminupdatelocationValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'manager',  ]),
  admin_check_token,
  adminupdatelocationController
);
router.get(
  "/retrieve/all/location/:adminid",
  adminValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'recruiter' , 'officeassistant' ,'manager', 'teamleader' ]),
  admin_check_token,
  adminretrievelocationController
);
router.get(
  "/retrieve/single/location/:adminid/:locationid",
  adminretrievelocationValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'manager',  ]),
  admin_check_token,
  adminretrievesinglelocationController
);

  (module.exports = router);
