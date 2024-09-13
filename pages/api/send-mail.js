// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, phone, subject, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
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
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email sent successfully!" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Destructure data from the request body
    const { name, email, phone, subject, message } = req.body;

    try {
      // Create a transporter object using Gmail service with async/await
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Set up email options
      const mailOptions = {
        from: email, // Sender address
        to: process.env.EMAIL_USER, // Receiver address
        subject: `New Contact Form Submission: ${subject}`, // Subject line
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Subject: ${subject}
          Message: ${message}
        `, // Email body
      };

      // Send email using async/await
      await transporter.sendMail(mailOptions);
      
      // Respond with success if email is sent
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      // Handle error if sending email fails
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    // Handle case where method is not POST
    res.status(405).json({ error: "Method not allowed" });
  }
}
