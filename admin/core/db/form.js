const mongoose = require("mongoose");
const schema = mongoose.Schema;

const countryschema = new schema({
  name: {
    type: Boolean,
  },
  fullname: {
    type: Boolean,
  },
  email: {
    type: Boolean,
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
  expectedSalary: {
    type: Boolean,
  },
  educationalQualification: {
    type: Boolean,
  },
  maritalStatus: {
    type:  mongoose.Schema.Mixed,
  },
  currentLocation: {
    type:  mongoose.Schema.Mixed,
  },
  otterFields: {
    type:  mongoose.Schema.Mixed,
  },
  gender: {
    type:  mongoose.Schema.Mixed,
  },
  bpoAccountAndExperience: {
    type:  mongoose.Schema.Mixed,
  },
  resume: {
    type:  mongoose.Schema.Mixed,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const countryModel = mongoose.model("country", countryschema);
module.exports = {
  countryModel,
};
