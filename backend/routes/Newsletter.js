import express from "express";
const router = express.Router();
import Newsletter from "../models/Newsletter.js";

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(200).json({ success: true, message: "Already subscribed" });
    }

    await Newsletter.create({ email });

    res.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;