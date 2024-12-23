const { AdminserviceRoles } = require("../../helper/rolecontrol");
const {
  adminupdateprofileController,
  adminupdateaddressController,
  adminresetPassword,
  adminretrieveteams,
    adminupdateprofilephoto,
    adminupdatesubadminidprofilephoto,
    adminresetsubadminidPassword,
    adminretrievesubadminprofileController,
    adminupdatesubadminidroleController,
    adminupdatesubadminidaddressController,
    adminupdatesubadminprofileController,
    admindeletesubadminid,
} = require("../app/controller/admin.mgn");
const { adminmaindashboardController } = require("../app/controller/dashboard");
const {
  adminretrieveusersController,
  adminretrievesingleuserController,
  admindeleteuserController,
  updateadminController,
  updateadminprofilecontroller,
  updatepasswordController,
  admindashboardController,
  adminretrieveteamleaderController,
  admindeleteadminController,
    updateadminrroleController,
   
} = require("../app/controller/hr");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const {
  adminupdateprofileValidation,
  adminretrievesingleprofileValidation,
  admindeleteadminValidation,
  adminupdateuserValidation,
  adminupdatepasswordValidation,
  adminudeleteuserValidation,
  adminupdateroleValidation,
  adminupdateaddressValidation,
  adminupdateprofilephotoValidation,
  adminmaindashboardValidation,
  adminretrievesubadminprofileValidation,
  adminupdatesubprofilephotoValidation,
  adminupdatesubaddressValidation,
  adminupdatesubadminprofileValidation,
  adminupdatesubadminpasswordValidation,
  admindeletesubamdinValidation,
} = require("../core/validation/hr");

const router = require("express").Router();
router.post(
  "/update/profile",
  adminupdateprofileValidation,
  admin_check_token,
  adminupdateprofileController
);
router.get(
  "/main/dashboard/:adminid",
  adminmaindashboardValidation,
  AdminserviceRoles([
    "admin",
    "superAdmin",
    "recruiter",
    "officeassistant",
    "manager",
    "teamleader",
  ]),
  admin_check_token,
  adminmaindashboardController
);
router.post(
  "/update/profile/photo",
  adminupdateprofilephotoValidation,
  admin_check_token,
  adminupdateprofilephoto
);
router.post(
  "/update/address",
  adminupdateaddressValidation,
  admin_check_token,
  adminupdateaddressController
);
router.post(
  "/update/subadmin/profile/photo",
  adminupdatesubprofilephotoValidation,
  admin_check_token,
  adminupdatesubadminidprofilephoto
);
router.post(
  "/update/subadmin/address",
  adminupdatesubaddressValidation,
  admin_check_token,
  adminupdatesubadminidaddressController,
);
router.post(
    "/update/subadmin/profile",
    adminupdatesubadminprofileValidation,
    admin_check_token,
    adminupdatesubadminprofileController,
);
router.post(
    "/update/subadmin/password",
    adminupdatesubadminpasswordValidation,
    admin_check_token,
    adminresetsubadminidPassword,
  );
router.post(
  "/update/staff/role_status",
  adminupdateroleValidation,
  admin_check_token,
  adminupdatesubadminidroleController,
);
router.get(
  "/retrieve/subadmin/:adminid/:subadminid",
  adminretrievesubadminprofileValidation,
  admin_check_token,
  adminretrievesubadminprofileController,
);
router.post(
  "/delete/subadmin",
  admindeletesubamdinValidation,
  admin_check_token,
  admindeletesubadminid
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
  "/retrieve/profile/:adminid",
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
  "/update/password",
  adminupdatepasswordValidation,
  admin_check_token,
  adminresetPassword
);
router.get(
  "/retrieve/teams/:adminid",
  adminValidation,
  admin_check_token,
  adminretrieveteams
);

module.exports = router;
