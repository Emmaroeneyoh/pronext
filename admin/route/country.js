const {
  adminretrievecountryController,
  admincreatecountryController,
  admincreategroupController,
  adminretrievegroupController,
  adminretrievesinglecountryController,
  adminupdatecountryController,
  admindeletecountryController,
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
} = require("../core/validation/country");
const {
  adminretrievespaceValidation,
  adminsinglespaceValidation,
  adminupdatespaceValidation,
  admincreatespaceValidation,
} = require("../core/validation/space");

const router = require("express").Router();
router.post(
  "/create/country",
  admincreatecountryValidation,
  admin_check_token,
  admincreatecountryController
);
router.post(
  "/update/country",
  adminupdatecountryValidation,
  admin_check_token,
  adminupdatecountryController
);

router.get(
  "/retrieve/country/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievecountryController
);
router.get(
  "/retrieve/single/country/:adminid/:countryid",
  adminretrievecountryValidation,
  admin_check_token,
  adminretrievesinglecountryController
);
router.get(
  "/retrieve/single/country/:adminid/:countryid",
  adminretrievecountryValidation,
  admin_check_token,
  adminretrievesinglecountryController
);
router.post(
  "/delete/country",
  admindeletecountryValidation,
  admin_check_token,
  admindeletecountryController
);

//for group
router.post(
  "/create/group",
  admincreategroupValidation,
  admin_check_token,
  admincreategroupController
);

router.get(
  "/retrieve/group/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievegroupController
);

//for space
router.post(
  "/create/space",
  admincreatespaceValidation,
  admin_check_token,
  admincreatespaceController
);
router.post(
  "/update/space",
  adminupdatespaceValidation,
  admin_check_token,
  adminupdatespaceController
);
router.post(
  "/retrieve/space",
  adminretrievespaceValidation,
  admin_check_token,
  adminretrievespaceController
);
router.get(
  "/retrieve/single/space/:adminid/:spaceid",
  adminsinglespaceValidation,
  admin_check_token,
  adminretrievesinglespaceController
);
router.delete(
  "/delete/space/:adminid/:spaceid",
  adminsinglespaceValidation,
  admin_check_token,
  admindeletespaceController
);

module.exports = router;
