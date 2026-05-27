import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const submission = await Contact.create(req.body);
    res.status(201).json({ success: true, submission });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
