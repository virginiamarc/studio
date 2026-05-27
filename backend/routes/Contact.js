import express from "express";
import Contact from "../models/Contact.js";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const submission = new Contact(req.body);
    await submission.save();

    // Notify YOU
    await sendEmail({
      to: "info@pranswendeou.com",
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 12px;">

          <div style="text-align: center; margin-bottom: 24px;">
            <img 
              src="https://studio.pranswendeou.com/logo.png"
              alt="PSD Studio"
              width="120"
              style="display:block; margin:0 auto; border:0; outline:none; text-decoration:none;"
            />
          </div>

          <h2 style="color: #111; font-weight: 600; margin-bottom: 16px;">New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Company:</strong> ${req.body.company || "N/A"}</p>
          <p><strong>Phone:</strong> ${req.body.phoneNumber}</p>
          <p><strong>Budget:</strong> ${req.body.budget || "N/A"}</p>
          <p><strong>Message:</strong><br>${req.body.message}</p>

          <div style="margin-top: 24px; border-top: 1px solid #eee; padding-top: 16px; color: #777; font-size: 13px;">
            PSD Studio — Notification
          </div>
        </div>
      `,
    });

    // Auto‑response to client
    await sendEmail({
      to: req.body.email,
      subject: "Thank you for reaching out",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; border: 1px solid #e5e5e5; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <img 
              src="https://studio.pranswendeou.com/logo.png"
              alt="PSD Studio"
              width="120"
              style="display: block; margin: 0 auto; border: 0; outline: none; text-decoration: none;"
            />
          </div>

          <h2 style="color: #111; font-weight: 600; margin-bottom: 16px;">Thank you for reaching out</h2>

          <p style="color: #444; line-height: 1.6;">
            Hi ${req.body.name},<br><br>
            Your message has been received. I’ll review it and respond shortly with next steps.
          </p>

          <div style="margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px; color: #777; font-size: 13px;">
            <strong>PSD Studio</strong><br>
            Creative Direction & Technical Production<br>
            <a href="https://studio.pranswendeou.com" style="color: #555;">studio.pranswendeou.com</a>
          </div>
        </div>
      `
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;