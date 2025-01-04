const express = require("express");
const router = express.Router();
const User = require("./models/User");

// Register User
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) throw new Error("Invalid credentials");
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

module.exports = router;
