const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate", required: true },
  position_id: { type: mongoose.Schema.Types.ObjectId, ref: "Position", required: true },
  voted_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vote", VoteSchema);
