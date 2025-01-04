const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

// Add a Result
router.post("/", async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Results for a Position
router.get("/:position_id", async (req, res) => {
  try {
    const results = await Result.find({ position_id: req.params.position_id }).populate("candidate_id");
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
