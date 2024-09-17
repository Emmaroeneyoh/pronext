const {
  adminaddlineupController,
  admincheckaddlineupController,
  adminretrievecandidateController,
  adminretrievelineupController,
  adminretrievesinglelineupController,
} = require("../app/controller/lineup");
const { admin_check_token } = require("../core/authorisation");
const {
  adminchecklineupValidation,
  adminretrievelineupValidation,
  adminretrievesinglelineupValidation,
} = require("../core/validation/lineup");

const router = require("express").Router();
router.post(
  "/check/existing/lineup",
  adminchecklineupValidation,
  admin_check_token,
  admincheckaddlineupController
);
router.post("/create/lineup", adminaddlineupController);
router.post(
  "/retrieve/lineup",
  adminretrievelineupValidation,
  admin_check_token,
  adminretrievelineupController
);
router.get(
  "/retrieve/single/lineup/:adminid/:lineupid",
  adminretrievesinglelineupValidation,
  admin_check_token,
  adminretrievesinglelineupController
);


  module.exports = router
