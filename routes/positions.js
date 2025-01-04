const express = require("express");
const router = express.Router();
const Position = require("../models/Position");

// Add a Position
router.post("/", async (req, res) => {
  try {
    const position = new Position(req.body);
    await position.save();
    res.status(201).json(position);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Positions
router.get("/", async (req, res) => {
  try {
    const positions = await Position.find();
    res.status(200).json(positions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
