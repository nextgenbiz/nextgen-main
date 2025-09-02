import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, mobile, company, email } = body;

    console.log("📩 Incoming form data:", body);

    if (!name || !mobile || !email) {
      return new Response(
        JSON.stringify({ message: "Please fill all required fields" }),
        { status: 400 }
      );
    }

    // Check env vars
    console.log("✅ SMTP_USER:", process.env.SMTP_USER);
    console.log("✅ SMTP_PASS exists:", !!process.env.SMTP_PASS);

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger SMTP server
      port: 465, // or 587 if TLS
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your Hostinger email (e.g. info@yourdomain.com)
        pass: process.env.SMTP_PASS, // the password you set
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "aditya@nextgenbusiness.co.in", // change this
      subject: "New Contact Form Submission",
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    console.log("✅ Email sent:", info.messageId);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Something went wrong!",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
