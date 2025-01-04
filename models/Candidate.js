const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  description: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Candidate", CandidateSchema);
