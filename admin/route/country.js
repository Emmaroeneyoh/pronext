const { AdminserviceRoles } = require("../../helper/rolecontrol");
const {
  adminretrievecountryController,
  admincreatecountryController,
  admincreategroupController,
  adminretrievegroupController,
  adminretrievesinglecountryController,
  adminupdatecountryController,
  admindeletecountryController,
  adminretrievesinglegroupController,
  adminupdategroupController,
  adminretrievegroupleaderController,
} = require("../app/controller/country");
const {
  admincreateexperienceController,
} = require("../app/controller/experience.education");
const {
  admindeletespaceController,
  adminretrievesinglespaceController,
  adminupdatespaceController,
  admincreatespaceController,
  adminretrievespaceController,
} = require("../app/controller/space");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const {
  admincreatecountryValidation,
  admincreategroupValidation,
  adminretrievecountryValidation,
  admindeletecountryValidation,
  adminupdatecountryValidation,
  adminupdategroupValidation,
  adminretrievesinglegroupValidation,
} = require("../core/validation/country");
const {
  adminretrievespaceValidation,
  adminsinglespaceValidation,
  adminupdatespaceValidation,
  admincreatespaceValidation,
  admindeletespaceValidation,
} = require("../core/validation/space");

const router = require("express").Router();
router.post(
  "/create/country",
  admincreatecountryValidation,
  AdminserviceRoles([ "admin", "superAdmin"]),
  admin_check_token,
  admincreatecountryController
);
router.post(
  "/update/country",
  adminupdatecountryValidation,
  AdminserviceRoles([ "admin", "superAdmin"]),
  admin_check_token,
  adminupdatecountryController
);

router.get(
  "/retrieve/country/:adminid",
  adminValidation,
  AdminserviceRoles([ "admin", "superAdmin"]),
  admin_check_token,
  adminretrievecountryController
);
router.get(
  "/retrieve/single/country/:adminid/:countryid",
  adminretrievecountryValidation,
  AdminserviceRoles([ "admin", "superAdmin"]),
  admin_check_token,
  adminretrievesinglecountryController
);
router.get(
  "/retrieve/single/country/:adminid/:countryid",
  adminretrievecountryValidation,
  AdminserviceRoles([ "admin", "superAdmin"]),
  admin_check_token,
  adminretrievesinglecountryController
);
router.post(
  "/delete/country",
  admindeletecountryValidation,
  AdminserviceRoles(["superAdmin"]),
  admin_check_token,
  admindeletecountryController
);

//for group
router.post(
  "/create/group",
  admincreategroupValidation,
  AdminserviceRoles([
    "admin",
    "superAdmin",
  ]),
  admin_check_token,
  admincreategroupController
);

router.get(
  "/retrieve/group/:adminid",
  adminValidation,
  AdminserviceRoles([
    "admin",
    "superAdmin","manager"
  ]),
  admin_check_token,
  adminretrievegroupController
);
router.get(
  "/retrieve/group/leader/:adminid",
  adminValidation,
  AdminserviceRoles([
    "admin",
    "superAdmin",
  ]),
  admin_check_token,
  adminretrievegroupleaderController
);
router.get(
  "/retrieve/single/group/:adminid/:groupid",
  adminretrievesinglegroupValidation,
  AdminserviceRoles([
    "admin",
    "superAdmin",
  ]),
  admin_check_token,
  adminretrievesinglegroupController
);
router.post(
  "/update/group",
  adminupdategroupValidation,
  AdminserviceRoles([
    "admin",
    "superAdmin",
  ]),
  admin_check_token,
  adminupdategroupController
);
//for space
router.post(
  "/create/space",
  admincreatespaceValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'recruiter' , 'officeassistant' ,'manager', 'teamleader' ]),
  admin_check_token,
  admincreatespaceController
);
router.post(
  "/update/space",
  adminupdatespaceValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'recruiter' , 'officeassistant' ,'manager', 'teamleader' ]),
  admin_check_token,
  adminupdatespaceController
);
router.get(
  "/retrieve/space/:adminid",
  adminValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'recruiter' , 'officeassistant' ,'manager', 'teamleader' ]),
  admin_check_token,
  adminretrievespaceController
);
router.get(
  "/retrieve/single/space/:adminid/:spaceid",
  adminsinglespaceValidation,
  AdminserviceRoles([ "admin", "superAdmin" , 'recruiter' , 'officeassistant' ,'manager', 'teamleader' ]),
  admin_check_token,
  adminretrievesinglespaceController
);
router.post(
  "/delete/space",
  admindeletespaceValidation,
  AdminserviceRoles([  "superAdmin" ]),
  admin_check_token,
  admindeletespaceController
);

module.exports = router;
