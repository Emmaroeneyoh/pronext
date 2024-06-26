const { admincreateexperienceController, adminretrieveexperienceController, admincreateeducationController, adminretrieveeducationController, adminupdateexperienceController, adminretrievesingleexperienceController, adminupdateeducationController, adminretrievesingleeducationController, admindeleteeducationController, admindeleteexperienceController } = require("../app/controller/experience.education");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { admineducationexperienceValidation, adminupdateexperienceValidation, admindeleteexperienceValidation, adminretrieveexperienceValidation, adminupdateeducationValidation, adminretrieveeducationValidation, admindeleteeducationValidation } = require("../core/validation/experience.education");



const router = require("express").Router();
router.post(
    "/create/experience",
    admineducationexperienceValidation,
    admin_check_token,
    admincreateexperienceController
);
router.post(
    "/update/experience",
    adminupdateexperienceValidation,
    admin_check_token,
    adminupdateexperienceController
);
router.post(
    "/delete/experience",
    admindeleteexperienceValidation,
    admin_check_token,
    admindeleteexperienceController
);
router.get(
    "/retrieve/experience/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveexperienceController
);
router.get(
    "/retrieve/single/experience/:adminid/:experienceid",
    adminretrieveexperienceValidation,
    admin_check_token,
    adminretrievesingleexperienceController
);
router.post(
    "/create/education",
    admineducationexperienceValidation,
    admin_check_token,
    admincreateeducationController
);
router.post(
    "/update/education",
    adminupdateeducationValidation,
    admin_check_token,
    adminupdateeducationController
);
router.post(
    "/delete/education",
    admindeleteeducationValidation,
    admin_check_token,
    admindeleteeducationController
);
router.get(
    "/retrieve/education/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveeducationController
);
router.get(
    "/retrieve/single/education/:adminid/:educationid",
    adminretrieveeducationValidation,
    admin_check_token,
    adminretrievesingleeducationController
);

module.exports = router