const mongoose = require("mongoose");
const schema = mongoose.Schema;

const countryschema = new schema({
  title: {
    type: String,
  },
  details: {
    type: String,
  },
  appear_date: {
    type: String,
  },
  disappear_date: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const dashboardinformationModel = mongoose.model("dashboardinformation", countryschema);
module.exports = {
    dashboardinformationModel 
};
