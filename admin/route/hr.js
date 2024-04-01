const { adminretrieveusersController, adminretrievesingleuserController, admindeleteuserController, updateadminController } = require("../app/controller/hr");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { adminupdateprofileValidation, adminretrievesingleprofileValidation } = require("../core/validation/hr");

const router = require("express").Router();
router.post(
    "/update/admin",
    adminupdateprofileValidation,
    admin_check_token,
    updateadminController
);
router.post(
    "/retrieve/all/admins",
    adminValidation,
    admin_check_token,
    adminretrieveusersController
);
router.post(
    "/retrieve/single/admin",
    adminretrievesingleprofileValidation,
    admin_check_token,
    adminretrievesingleuserController
);
router.post(
    "/delete/admin",
    adminretrievesingleprofileValidation,
    admin_check_token,
    admindeleteuserController
);

module.exports = router