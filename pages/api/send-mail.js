import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, phone, subject, message } = req.body;

//     const mailOptions = {
//       to: process.env.EMAIL_USER,
//       from: email,
//       subject: `New Contact Form Submission: ${subject}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Subject: ${subject}
//         Message: ${message}
//       `,
//     };

//     try {
//       await sgMail.send(mailOptions);
//       res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error.response.body);
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
