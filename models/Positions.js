const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  position_name: { type: String, required: true },
  max_votes: { type: Number, default: 1 }, // Maximum votes allowed for this position
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Position", PositionSchema);
