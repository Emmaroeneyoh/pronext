const mongoose = require("mongoose");
const schema = mongoose.Schema;

const countryschema = new schema({
  name: {
    type: Boolean,
  },
  fullName: {
    type: Boolean,
  },
  email: {
    type: Boolean,
  },
  remark: {
    type: Boolean,
  },

  location: {
    type: mongoose.Schema.Types.Mixed,
  },
  phoneNumber: {
    type: Boolean,
  },
  dateOfBirth: {
    type: Boolean,
  },
  city: {
    type: Boolean,
  },
  course: {
    type: Boolean,
  },
  interviewDate: {
    type: Boolean,
    default: true,
  },

  educationalQualification: {
    type: mongoose.Schema.Types.Mixed,
  },
  maritalStatus: {
    type: mongoose.Schema.Types.Mixed,
  },
  currentLocation: {
    type: mongoose.Schema.Types.Mixed,
  },
  otterFields: {
    type: mongoose.Schema.Types.Mixed,
  },
  gender: {
    type: mongoose.Schema.Types.Mixed,
  },

  bpoAccountAndExperience: {
    type: mongoose.Schema.Types.Mixed,
  },
  resume: {
    type: mongoose.Schema.Types.Mixed,
  },
  status: {
    type: mongoose.Schema.Types.Mixed,
  },
  options: {
    type: mongoose.Schema.Types.Mixed,
  },
  note: {
    type: mongoose.Schema.Types.Mixed,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const formModel = mongoose.model("form", countryschema);
module.exports = {
  formModel,
};
