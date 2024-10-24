const { draftModel } = require("../../core/db/draft");
const { formModel } = require("../../core/db/form");

const adminsavedraftController = async (req, res, next) => {
  const { company, location, email, adminid } = req.body;
  const draftdata = req.body;
  try {
    const userEmail = email.toLowerCase();
    const checklineup = await draftModel.findOne({
      company,
      location,
      email: userEmail,
    });
    if (checklineup) {
      const updatedraft = await draftModel.findOneAndUpdate({
        $set: draftdata,
      });
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "draft saved",
      });
    } else {
      const form = await new draftModel(draftdata);
      const draftdetails = await form.save();

      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "candidate not linedup",
        data: draftdetails,
      });
    }
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievedraftController = async (req, res, next) => {
  const { company, location, email, adminid } = req.body;
  try {
    const userEmail = email.toLowerCase();
    const draftlineup = await draftModel.findOne({
      company,
      location,
      email: userEmail,
    });
      console.log(draftlineup)
    if (!draftlineup) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "draft not available",
      });
    }
    const shape = await formModel.findOne({
        "location.location": location,
        "location.company": company,
    });
      const draftdata = {shape,draftlineup,}
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "draft not available",
      data: draftdata
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminretrievesingledraftController = async (req, res, next) => {
  const { draftid } = req.params;
  try {
    const draftlineup = await draftModel.findById(draftid);
    const company = draftlineup.company;
    const location = draftlineup.location;

    const form = await formModel.findOne({
      "location.location": location,
      "location.company": company,
    });
    const draftdata = { draftlineup, form };
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "draft not available",
      data: draftdata,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  adminretrievedraftController,
  adminsavedraftController,
  adminretrievesingledraftController,
};
