export const sendEmail = async ({ to, subject, html }) => {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "PSDO Studio <info@pranswendeou.com>",
      to,
      subject,
      html,
    }),
  });

  const data = await res.json();
  console.log("Resend response:", data);

  if (!res.ok) {
    throw new Error(`Email failed: ${JSON.stringify(data)}`);
  }
};