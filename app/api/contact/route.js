import nodemailer from "nodemailer";
export const runtime = "nodejs";



export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, date, venue, message } = body;
    

if (!name || !email || !date || !message) {
  return Response.json(
    { error: "Please fill all required fields." },
    { status: 400 }
  );
}
console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("EMAIL_USER:", process.env.EMAIL_USER);

   const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
   port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    await transporter.sendMail({
     from: `"Bride's Right Hand" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // <-- change this
      replyTo: email,
  subject: `New Wedding Inquiry — ${name}`,
      html: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Wedding Date:</b> ${date}</p>
        <p><b>Venue:</b> ${venue}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });
    return Response.json({
  success: true,
});

   console.error(error);

return Response.json(
  {
    error: "Failed to send inquiry.",
  },
  {
    status: 500,
  }
)
  } catch (error) {
  console.error(error);

  return Response.json(
    {
      error: "Failed to send inquiry.",
    },
    {
      status: 500,
    }
  );
}
}