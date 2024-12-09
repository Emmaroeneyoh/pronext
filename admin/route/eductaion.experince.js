const { AdminserviceRoles } = require("../../helper/rolecontrol");
const { admincreateexperienceController, adminretrieveexperienceController, admincreateeducationController, adminretrieveeducationController, adminupdateexperienceController, adminretrievesingleexperienceController, adminupdateeducationController, adminretrievesingleeducationController, admindeleteeducationController, admindeleteexperienceController } = require("../app/controller/experience.education");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { admineducationexperienceValidation, adminupdateexperienceValidation, admindeleteexperienceValidation, adminretrieveexperienceValidation, adminupdateeducationValidation, adminretrieveeducationValidation, admindeleteeducationValidation } = require("../core/validation/experience.education");



const router = require("express").Router();
router.post(
    "/create/experience",
    admineducationexperienceValidation,
    AdminserviceRoles([
        "admin",
        "superAdmin",
      ]),
    admin_check_token,
    admincreateexperienceController
);
router.post(
    "/update/experience",
    adminupdateexperienceValidation,
    AdminserviceRoles([
        "admin",
        "superAdmin",
      ]),
    admin_check_token,
    adminupdateexperienceController
);
router.post(
    "/delete/experience",
    admindeleteexperienceValidation,
    AdminserviceRoles([
      
        "superAdmin",
      ]),
    admin_check_token,
    admindeleteexperienceController
);
router.get(
    "/retrieve/experience/:adminid",
    adminValidation,
    AdminserviceRoles([
        "admin",
        "superAdmin",
      ]),
    admin_check_token,
    adminretrieveexperienceController
);
router.get(
    "/retrieve/single/experience/:adminid/:experienceid",
    adminretrieveexperienceValidation,
    AdminserviceRoles([
        "admin",
        "superAdmin",
      ]),
    admin_check_token,
    adminretrievesingleexperienceController
);
router.post(
    "/create/education",
    admineducationexperienceValidation,
    AdminserviceRoles([
        "admin",
        "superAdmin",
      ]),
    admin_check_token,
    admincreateeducationController
);
router.post(
    "/update/education",
    adminupdateeducationValidation,
    AdminserviceRoles([
        "admin",
        "superAdmin",
      ]),
    admin_check_token,
    adminupdateeducationController
);
router.post(
    "/delete/education",
    admindeleteeducationValidation,
    AdminserviceRoles([
       
        "superAdmin",
      ]),
    admin_check_token,
    admindeleteeducationController
);
router.get(
    "/retrieve/education/:adminid",
    adminValidation,
    AdminserviceRoles([
        "admin",
        "superAdmin",
      ]),
    admin_check_token,
    adminretrieveeducationController
);
router.get(
    "/retrieve/single/education/:adminid/:educationid",
    adminretrieveeducationValidation,
    AdminserviceRoles([
        "admin",
        "superAdmin",
      ]),
    admin_check_token,
    adminretrievesingleeducationController
);

module.exports = router