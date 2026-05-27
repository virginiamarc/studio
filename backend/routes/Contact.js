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
              src="https://studio-backend-rk21.onrender.com/logo-psd.png"
              alt="PSD Studio logo"
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

    // Auto‑response to the client
    await sendEmail({
      to: req.body.email,
      subject: "Thank you for contacting PSD Studio",
      html: `
    <!DOCTYPE html>
    <html>
      <body style="margin:0; padding:0; background:#fafafa;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fafafa; padding:32px 0;">
          <tr>
            <td align="center">

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px; background:#ffffff; border-radius:12px; padding:32px; font-family:Inter, Arial, sans-serif; color:#111;">

                <tr>
                  <td align="center" style="padding-bottom:24px;">
                    <img 
                      src="https://studio-backend-rk21.onrender.com/logo-psd.png" 
                      alt="PSD Studio" 
                      width="120" 
                      style="display:block; border:0; outline:none; text-decoration:none;"
                    />
                  </td>
                </tr>

                <tr>
                  <td style="font-size:20px; font-weight:600; padding-bottom:16px;">
                    Thank you for reaching out
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px; line-height:1.6; color:#333;">
                    Hi ${req.body.name},<br><br>
                    Your message has been received. I’ll review it and get back to you shortly.  
                    If your inquiry is time‑sensitive, feel free to reply directly to this email.
                  </td>
                </tr>

                <tr>
                  <td style="height:32px; font-size:0; line-height:0;">&nbsp;</td>
                </tr>

                <tr>
                  <td style="font-size:13px; line-height:1.5; color:#777;">
                    <span style="display:none;">x</span>
                    <strong>PSD Studio</strong><br>
                    Creative Direction & Technical Production<br>
                    <a href="https://studio.pranswendeou.com" style="color:#555; text-decoration:none;">
                      studio.pranswendeou.com
                    </a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
      `,
    });


    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;