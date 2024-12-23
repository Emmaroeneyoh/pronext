const mongoose = require("mongoose");
const schema = mongoose.Schema;

const groupschema = new schema(
  {
  
    interviewDate: {
      type: Date,  default : null
    },
 
  },
  { strict: false }
);
const lineupModel = mongoose.model("lineup", groupschema);
module.exports = {
  lineupModel,
};
