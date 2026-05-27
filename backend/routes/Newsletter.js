import express from "express";
import Newsletter from "../models/Newsletter.js";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const subscriber = new Newsletter({ email: req.body.email });
    await subscriber.save();

    // Notify YOU
    await sendEmail({
      to: "info@pranswendeou.com",
      subject: "New Newsletter Subscriber",
      html: `<p>New subscriber: <strong>${req.body.email}</strong></p>`,
    });

    // Auto‑response to subscriber
    await sendEmail({
      to: req.body.email,
      subject: "You're subscribed!",
      html: `
        <p>Thank you for subscribing to PSD Studio.</p>
        <p>You’ll receive updates, resources, and inspiration soon.</p>
      `,
    });

    return res.json({ success: true });
  } catch (err) {
    // Handle duplicate email gracefully
    if (err.code === 11000) {
      return res.json({
        success: true,
        message: "Already subscribed",
      });
    }

    console.error(err);
    return res.status(500).json({ success: false });
  }
});

export default router;