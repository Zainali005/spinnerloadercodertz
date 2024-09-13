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
  // Ensure it's a POST request
  if (req.method === "POST") {
    // Destructure the request body
    const { name, email, phone, subject, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_USER, // Store your email in environment variables
        pass: process.env.EMAIL_PASS, // Store your email password in environment variables
      },
      secure: true,
    });

    try {
      // Verify the transporter
      await new Promise((resolve, reject) => {
        transporter.verify((error, success) => {
          if (error) {
            console.error("Error verifying transporter:", error);
            return reject(error);
          } else {
            console.log("Server is ready to send messages");
            return resolve(success);
          }
        });
      });

      // Email content
      const mailData = {
        from: {
          name: name,
          address: process.env.EMAIL_USER,
        },
        replyTo: email,
        to: "zainali5002@gmail.com", // Replace with recipient's email
        subject: `Form message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Subject: ${subject}
          Message: ${message}
        `,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      // Send the email
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err, info) => {
          if (err) {
            console.error("Error sending mail:", err);
            return reject(err);
          } else {
            console.log("Email sent:", info);
            return resolve(info);
          }
        });
      });

      // Respond with a success status
      res.status(200).json({ status: "OK", message: "Email sent successfully" });
    } catch (error) {
      // Handle any errors
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    // If method is not POST, return a method not allowed status
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
