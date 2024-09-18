const mongoose = require("mongoose");
const schema = mongoose.Schema;

const countryschema = new schema({
  lineupid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "lineup",
  },
  adminid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },

  rating: {
    type: Number,
    default: "",
  },
  remark: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const lineupreviewModel = mongoose.model("lineupreview", countryschema);
module.exports = {
  lineupreviewModel,
};
