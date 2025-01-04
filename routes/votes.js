const express = require("express");
const router = express.Router();
const Vote = require("../models/Vote");

// Cast a Vote
router.post("/", async (req, res) => {
  try {
    const { user_id, candidate_id, position_id } = req.body;

    // Check if user has already voted for this position
    const existingVote = await Vote.findOne({ user_id, position_id });
    if (existingVote) return res.status(400).json({ error: "You have already voted for this position" });

    const vote = new Vote({ user_id, candidate_id, position_id });
    await vote.save();
    res.status(201).json(vote);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Votes for a Candidate
router.get("/:candidate_id", async (req, res) => {
  try {
    const votes = await Vote.countDocuments({ candidate_id: req.params.candidate_id });
    res.status(200).json({ total_votes: votes });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
