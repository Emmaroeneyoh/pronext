const { admincreateserviceController, adminretrievesinglserviceController, admindeleteserviceController, adminretrieveallserviceController } = require("../app/controller/service");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const { admincreateserviceValidation, adminupdateserviceValidation, adminretrievedeleteserviceValidation } = require("../core/validation/service");

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
router.post(
    "/retrieve/single/service",
    adminretrievedeleteserviceValidation,
    admin_check_token,
    adminretrievesinglserviceController
);
router.post(
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