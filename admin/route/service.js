const { admincreateserviceController, adminretrievesinglserviceController, admindeleteserviceController, adminretrieveallserviceController } = require("../app/controller/service");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { admincreateserviceValidation, adminupdateserviceValidation, adminretrievedeleteserviceValidation, adminsingleserviceValidation } = require("../core/validation/service");

const router = require("express").Router();



router.post(
    "/create/service",
    admincreateserviceValidation,
    admin_check_token,
    admincreateserviceController
);
router.post(
    "/update/service",
    adminupdateserviceValidation,
    admin_check_token,
    admincreateserviceController
);
router.get(
    "/retrieve/single/service/:adminid/:serviceid",
    adminsingleserviceValidation,
    admin_check_token,
    adminretrievesinglserviceController
);
router.get(
    "/retrieve/all/service/:adminid",
    adminValidation,
    admin_check_token,
    adminretrieveallserviceController
);
router.post(
    "/delete/service",
    adminretrievedeleteserviceValidation,
    admin_check_token,
    admindeleteserviceController
);

module.exports = router