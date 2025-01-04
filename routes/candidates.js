const express = require("express");
const router = express.Router();
const Candidate = require("./models/Candidate");

// Add a Candidate
router.post("/", async (req, res) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Candidates
router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Candidates by Position
router.get("/:position", async (req, res) => {
  try {
    const candidates = await Candidate.find({ position: req.params.position });
    res.status(200).json(candidates);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
