const { userhiretalentController, userfindjobController, contactuscontroller } = require("../app/controller/hiretalent");
const { userhiretalentValidation, userfindjobValidation, contactusValidation } = require("../core/validation/hirejob");

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

router.post(
    "/contactus",
    contactusValidation,
    contactuscontroller
);


module.exports = router