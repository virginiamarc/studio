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
        <div style="font-family: Inter, Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; border: 1px solid #e5e5e5; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <img 
              src="https://studio-backend.onrender.com/images/logo-psd.png"
              alt="PSD Studio logo"
              width="120"
              style="display: block; margin: 0 auto; border: 0; outline: none; text-decoration: none;"
            />
          </div>

          <h2 style="color: #111; font-weight: 600; margin-bottom: 16px;">You're subscribed</h2>

          <p style="color: #444; line-height: 1.6;">
            Thank you for joining the PSD Studio newsletter. You’ll receive updates, insights, and resources crafted with intention.
          </p>

          <div style="margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px; color: #777; font-size: 13px;">
            <strong>PSD Studio</strong><br>
            Creative Direction & Technical Production<br>
            <a href="https://studio.pranswendeou.com" style="color: #555;">studio.pranswendeou.com</a>
          </div>
        </div>
      `
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