const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  position_id: { type: mongoose.Schema.Types.ObjectId, ref: "Position", required: true },
  candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate", required: true },
  total_votes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Result", ResultSchema);
