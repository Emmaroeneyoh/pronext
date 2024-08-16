const { admin_check_token } = require("../../core/authorisation");
const { adminValidation } = require("../../core/validation/auth");
const {
  adminretrievecompanyController,
  admincreatecompanyController,
  adminupdatecompanyController,
  adminretrievesinglecompanyController,
  admindeletecompanyController,
} = require("../controller/company");
const {
  admincreatecompanyValidation,
  admindeletecompanyValidation,
  adminupdatecompanyValidation,
  adminretrievecompanyValidation,
} = require("../core/validation/company");

const router = require("express").Router();
router.post(
  "/create/company",
  admincreatecompanyValidation,
  admin_check_token,
  admincreatecompanyController
);
router.post(
  "/delete/company",
  admindeletecompanyValidation,
  admin_check_token,
  admindeletecompanyController
);
router.post(
  "/update/company",
  adminupdatecompanyValidation,
  admin_check_token,
  adminupdatecompanyController
);
router.get(
  "/retrieve/all/company/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievecompanyController
);
router.get(
  "/retrieve/single/company/:adminid/:companyid",
  adminretrievecompanyValidation,
  admin_check_token,
  adminretrievesinglecompanyController
);

  (module.exports = router);
