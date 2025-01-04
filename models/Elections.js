const mongoose = require("mongoose");

const ElectionSchema = new mongoose.Schema({
  election_name: { type: String, required: true },
  started_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  status: { type: String, enum: ["upcoming", "active", "completed"], default: "upcoming" },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Election", ElectionSchema);
