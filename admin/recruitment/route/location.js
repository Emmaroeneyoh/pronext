const { admin_check_token } = require("../../core/authorisation");
const { adminValidation } = require("../../core/validation/auth");
const {
  adminretrievelocationController,
  admincreatelocationController,
  adminupdatelocationController,
  adminretrievesinglelocationController,
  admindeletelocationController,
} = require("../controller/location");
const {
  admincreatelocationValidation,
  admindeletelocationValidation,
  adminupdatelocationValidation,
  adminretrievelocationValidation,
} = require("../core/validation/location");

const router = require("express").Router();
router.post(
  "/create/location",
  admincreatelocationValidation,
  admin_check_token,
  admincreatelocationController
);
router.post(
  "/delete/location",
  admindeletelocationValidation,
  admin_check_token,
  admindeletelocationController
);
router.post(
  "/update/location",
  adminupdatelocationValidation,
  admin_check_token,
  adminupdatelocationController
);
router.get(
  "/retrieve/all/location/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievelocationController
);
router.get(
  "/retrieve/single/location/:adminid/:locationid",
  adminretrievelocationValidation,
  admin_check_token,
  adminretrievesinglelocationController
);

  (module.exports = router);
