import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 587,
    secure: false,
    auth: {
      user: "resend",
      pass: process.env.RESEND_API_KEY,
    },
  });

  await transporter.sendMail({
    from: "PSD Studio <info@pranswendeou.com>",
    to,
    subject,
    html,
  });
};
