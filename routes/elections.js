const express = require("express");
const router = express.Router();
const Election = require("../models/Election");

// Add an Election
router.post("/", async (req, res) => {
  try {
    const election = new Election(req.body);
    await election.save();
    res.status(201).json(election);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Elections
router.get("/", async (req, res) => {
  try {
    const elections = await Election.find();
    res.status(200).json(elections);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update Election Status
router.put("/:id", async (req, res) => {
  try {
    const election = await Election.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(election);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
