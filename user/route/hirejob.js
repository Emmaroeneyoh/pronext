const { userhiretalentController, userfindjobController } = require("../app/controller/hiretalent");
const { userhiretalentValidation, userfindjobValidation } = require("../core/validation/hirejob");

const router = require("express").Router();


router.post(
    "/hiretalent",
    userhiretalentValidation,
    userhiretalentController
);

router.post(
    "/findjob",
    userfindjobValidation,
    userfindjobController
);


module.exports = router