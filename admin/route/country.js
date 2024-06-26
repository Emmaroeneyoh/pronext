const { adminretrievecountryController, admincreatecountryController, admincreategroupController, adminretrievegroupController, adminretrievesinglecountryController, adminupdatecountryController, admindeletecountryController } = require("../app/controller/country");
const { admincreateexperienceController } = require("../app/controller/experience.education");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { admincreatecountryValidation, admincreategroupValidation, adminretrievecountryValidation, admindeletecountryValidation, adminupdatecountryValidation } = require("../core/validation/country");


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

module.exports = router