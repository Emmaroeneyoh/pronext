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
    company: {
      type: String,
    },
    adminid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
    location: {
      type: String,
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
