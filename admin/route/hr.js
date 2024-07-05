const { adminretrieveusersController, adminretrievesingleuserController, admindeleteuserController, updateadminController, updateadminprofilecontroller, updatepasswordController, admindashboardController, adminretrieveteamleaderController, admindeleteadminController, updateadminrroleController } = require("../app/controller/hr");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { adminupdateprofileValidation, adminretrievesingleprofileValidation, admindeleteadminValidation, adminupdateuserValidation, adminupdatepasswordValidation, adminudeleteuserValidation, adminupdateroleValidation } = require("../core/validation/hr");

const router = require("express").Router();
router.post(
    "/update/profile",
    adminupdateprofileValidation,
    admin_check_token,
    updateadminController
);
router.post(
    "/update/staff/role_status",
    adminupdateroleValidation,
    admin_check_token,
    updateadminrroleController
);
router.post(
    "/delete/admin",
    admindeleteadminValidation,
    admin_check_token,
    admindeleteadminController
);
router.get(
    "/retrieve/all/admins/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveusersController
);
router.get(
    "/retrieve/teamleader/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveteamleaderController
);
router.get(
    "/dashboard/:adminid",
    adminValidation,
    admin_check_token,
    admindashboardController
);
router.get(
    "/retrieve/single/admin/:adminid/:staffid",
    adminretrievesingleprofileValidation,
    admin_check_token,
    adminretrievesingleuserController
);
// router.post(
//     "/delete/admin",
//     admindeleteadminValidation,
//     admin_check_token,
//     admindeleteuserController
// );
router.post(
    "/update/staff",
    adminupdateuserValidation,
    admin_check_token,
    updateadminprofilecontroller
);
router.post(
    "/update/staff/password",
    adminupdatepasswordValidation,
    admin_check_token,
    updatepasswordController
);

module.exports = router