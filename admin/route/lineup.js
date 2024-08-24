const {
  adminretrievelineupController,
  adminaddlineupController,
  admincheckaddlineupController,
} = require("../app/controller/lineup");
const { admin_check_token } = require("../core/authorisation");
const {
  adminchecklineupValidation,
  adminretrievelineupValidation,
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


  module.exports = router
