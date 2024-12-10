const mongoose = require("mongoose");
const schema = mongoose.Schema;

const groupschema = new schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      default : 'pending'
    },
    interviewDate: {
      type: Date,  default : null
    },
  updated_at: {
      type: Date,
      default : null
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
    },
    adminid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "location",
    },
   email: {
      type: String,
    },
  },
  { strict: false }
);
const lineupModel = mongoose.model("lineup", groupschema);
module.exports = {
  lineupModel,
};
