const mongoose = require("mongoose");
const schema = mongoose.Schema;

const groupschema = new schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
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
const draftModel = mongoose.model("draft", groupschema);
module.exports = {
  draftModel,
};