// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, phone, position, experience, coverLetter, email } = req.body;
//     console.log(req.body, "body");

//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const adminEmail = "zainali5002@gmail.com";
//     const userEmail = email;

//     const adminMailOptions = {
//       from: process.env.EMAIL_USER,
//       to: adminEmail,
//       subject: "New Job Application",
//       text: `You have received a new job application from ${name}. Here are the details:\n\n
//         Name: ${name}\n
//         Phone: ${phone}\n
//         Position: ${position}\n
//         Experience: ${experience}\n
//         Cover Letter: ${coverLetter}\n
//         Email: ${email}`,
//     };

//     const userMailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "zainali5002@gmail.com",
//       subject: "Application Received",
//       text: `Hi ${name},\n\nThank you for your application for the position of ${position}. We will get back to you shortly.\n\nBest Regards,\nCodeErtz`,
//     };

//     try {
//       await transporter.sendMail(adminMailOptions);
//       await transporter.sendMail(userMailOptions);

//       res.status(200).json({ message: "Emails sent successfully!" });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       res.status(500).json({ error: "Failed to send emails" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }



import nodemailer from "nodemailer";
import multer from "multer";
import nextConnect from "next-connect";

const upload = multer({ dest: 'uploads/' }); // Specify the upload directory

const handler = nextConnect();

handler.use(upload.single('resume')); // Handle single file upload

handler.post(async (req, res) => {
  const { name, phone, position, experience, coverLetter, email } = req.body;
  const resume = req.file; // The uploaded file

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const adminEmail = "zainali5002@gmail.com";
  const userEmail = email;

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: "New Job Application",
    text: `You have received a new job application from ${name}. Here are the details:\n\n
      Name: ${name}\n
      Phone: ${phone}\n
      Position: ${position}\n
      Experience: ${experience}\n
      Cover Letter: ${coverLetter}\n
      Email: ${email}`,
    attachments: [
      {
        filename: resume.originalname,
        path: resume.path, // Path to the uploaded file
      },
    ],
  };

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Application Received",
    text: `Hi ${name},\n\nThank you for your application for the position of ${position}. We will get back to you shortly.\n\nBest Regards,\nCodeErtz`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

export default handler;
