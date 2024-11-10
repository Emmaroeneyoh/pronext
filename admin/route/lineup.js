const { adminsavedraftController, adminretrievedraftController, adminretrievesingledraftController, adminretrieveadmindraftController } = require("../app/controller/draft");
const {
  adminaddlineupController,
  admincheckaddlineupController,
  adminretrievecandidateController,
  adminretrievelineupController,
  adminretrievesinglelineupController,
} = require("../app/controller/lineup");
const {
  admindeletelineupController,
  adminupdatelineupController,
  adminupdatelineupstatusController,
  adminsendlineupnotificationcontroller,
} = require("../app/controller/lineup.mgn");
const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const {
  adminchecklineupValidation,
  adminretrievelineupValidation,
  adminretrievesinglelineupValidation,
  adminupdatelineupValidation,
  adminuodatelineupstatusValidation,
  adminsendnotificationValidation,
  admindeletelineupValidation,
  adminsingledraftValidation,
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

router.post(
  "/update/lineup",
  // adminupdatelineupValidation,
  admin_check_token,
  adminupdatelineupController
);
router.post(
  "/edit/lineup/status",
  adminuodatelineupstatusValidation,
  admin_check_token,
  adminupdatelineupstatusController
);
router.get(
  "/retrieve/single/lineup/:adminid/:lineupid",
  adminretrievesinglelineupValidation,
  admin_check_token,
  adminretrievesinglelineupController
);
router.post(
  "/delete/lineup",
  admindeletelineupValidation,
  admin_check_token,
  admindeletelineupController
);
router.post(
  "/send/notification",
  adminsendnotificationValidation,
  admin_check_token,
  adminsendlineupnotificationcontroller
);
router.post(
  "/update/draft",
  admin_check_token,
  adminsavedraftController
);
router.post(
  "/retrieve/draft",
  admin_check_token,
  adminretrievedraftController
);
router.post(
  "/retrieve/draft",
  admin_check_token,
  adminretrievedraftController
);
router.get(
  "/recall/draft/:adminid",
  adminValidation,
  admin_check_token,
  adminretrieveadmindraftController
);
router.get(
  "/retrieve/single/draft/:adminid/:draftid",
  adminsingledraftValidation,
  admin_check_token,
   adminretrievesingledraftController
);

module.exports = router;
