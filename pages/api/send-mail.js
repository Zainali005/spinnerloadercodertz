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
//       console.error("Error sending email:", error);
//       res.status(500).json({ error: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

export default function handler(req, res) {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user:"zainali5002@gmail.com", 
      pass: "aczkmjkcatkbyxjc", 
    },
  })

  transporter.sendMail({
    from: `"Website Contact Form" <${"zainali5002@gmail.com"}>`, 
    to: "zainali5002@gmail.com",
    replyTo: req.body.email, 
    subject: req.body.subject || "Contact via Website", // Use the subject from the form
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}`, 
    html: `<b>Name:</b> ${req.body.name}<br/>
           <b>Email:</b> ${req.body.email}<br/>
           <b>Phone:</b> ${req.body.phone}<br/>
           <b>Subject:</b> ${req.body.subject}<br/>
           <b>Message:</b> ${req.body.message}`,
  }).then((response) => {res.send(response)})
  .catch(error => {res.send(error)})
}
