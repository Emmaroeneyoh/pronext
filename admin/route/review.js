const { admin_check_token } = require("../core/authorisation");
const { adminValidation } = require("../core/validation/auth");
const {
  adminupdatereviewlineupController,
  admincreatereviewlineupController,
  adminretrievereviewlineupController,
  adminretrievesreviewlineupController,
  adminretrievesinglereviewlineupController,
  admindeletereviewlineupController,
} = require("../recruitment/controller/review");
const {
  adminsinglelineupreviewValidation,
  adminupdatelineupreviewValidation,
  admincreatelineupreviewValidation,
  adminretrievelineupreviewValidation,
  admindeletelineupreviewValidation,
} = require("../recruitment/core/validation/review");

const router = require("express").Router();

router.post(
  "/retrieve/existing/lineup",
  adminretrievelineupreviewValidation,
  admin_check_token,
  adminretrievereviewlineupController
);
router.post(
  "/create/lineup/review",
  admincreatelineupreviewValidation,
  admin_check_token,
  admincreatereviewlineupController
);
router.post(
  "/update/review",
  adminupdatelineupreviewValidation,
  admin_check_token,
  adminupdatereviewlineupController
);
router.put(
  "/delete/review",
  admindeletelineupreviewValidation,
  admin_check_token,
  admindeletereviewlineupController
);
router.get(
  "/retrieve/single/review/:adminid/:reviewid",
  adminsinglelineupreviewValidation,
  admin_check_token,
  adminretrievesinglereviewlineupController
);
router.get(
  "/retrieve/review/:adminid",
  adminValidation,
  admin_check_token,
  adminretrievesreviewlineupController
);

module.exports = router;
