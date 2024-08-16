const mongoose = require("mongoose");
const schema = mongoose.Schema;

const countryschema = new schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  remark: {
    type: String,
  },
  status: {
    type: String,
  },
  document: {
    type: String,
  },
  account_name: {
    type: String,
  },
  salary_range: {
    type: String,
  },
  other_info: {
    type: String,
  },
  startup_date: {
    type: String,
  },
  operation_mode : {
    type: String,
  },
  interview_mode: {
    type: String,
  },
  education: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "education",
  },
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "experience",
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "country",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  editedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    default: null,
  },

  editedAt: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const locationModel = mongoose.model("location", countryschema);
module.exports = {
  locationModel,
};
