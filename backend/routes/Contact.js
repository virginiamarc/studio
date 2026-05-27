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
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Company:</strong> ${req.body.company}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Budget:</strong> ${req.body.budget}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>
      `,
    });

    // Auto‑response to client
    await sendEmail({
      to: req.body.email,
      subject: "We received your message",
      html: `
        <p>Hi ${req.body.name},</p>
        <p>Thank you for contacting PSD Studio. Your message has been received and we will respond shortly.</p>
        <p>Warm regards,<br/>PSD Studio</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;