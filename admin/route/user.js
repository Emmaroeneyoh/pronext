const { adminretrieveallhiretalentController, adminretrievesinglehiretalentController, admindeletehiremeController, adminretrieveallfindjobController, adminretrievesinglefindjobController, admindeletefindjobController, adminretrieveformsController, adminretrievesingleformController } = require("../app/controller/user");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { adminuserformValidation } = require("../core/validation/service");


const router = require("express").Router();



router.post(
    "/retrieve/all/form/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveformsController
);
router.get(
    "/retrieve/single/form/:adminid/:formid",
    adminuserformValidation,
    admin_check_token,
    adminretrievesingleformController
);
router.get(
    "/retrieve/all/hiretalent/form/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveallhiretalentController
);

router.get(
    "/retrieve/single/hiretalent/form/:adminid/:formid",
    adminuserformValidation,
    admin_check_token,
    adminretrievesinglehiretalentController
);
router.delete(
    "/delete/hiretalent/form",
    adminuserformValidation,
    admin_check_token,
    admindeletehiremeController
);

router.get(
    "/retrieve/all/findjob/form/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveallfindjobController
);
router.get(
    "/retrieve/single/findjob/form/:adminid/:formid",
    adminuserformValidation,
    admin_check_token,
    adminretrievesinglefindjobController
);
router.delete(
    "/delete/findjob/form",
    adminuserformValidation,
    admin_check_token,
    admindeletefindjobController
);

module.exports = router