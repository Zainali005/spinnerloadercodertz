import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false, 
  },
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const form = new IncomingForm(); 

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Form parsing error:", err);
        return res.status(500).json({ error: "Form parsing error" });
      }

      const { name, phone, email, position, experience, coverLetter } = fields;
      const resumeFile = files.resume;

      // Check if essential fields are present
      if (!name || !email) {
        return res.status(400).json({ error: "Name and Email are required" });
      }

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const adminEmail = "zainali5002@gmail.com";

      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: adminEmail,
        subject: "New Job Application",
        text: `You have received a new job application from ${name}.\n\nDetails:\nName: ${name}\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience}\nCover Letter: ${coverLetter}\nEmail: ${email}`,
        attachments: [
          {
            filename: resumeFile.originalFilename,
            path: resumeFile.filepath,
          },
        ],
      };

      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Application Received",
        text: `Hi ${name},\n\nThank you for your application for the position of ${position}. We will get back to you shortly.\n\nBest Regards,\nYour Company Name`,
      };

      try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
        return res.status(200).json({ message: "Emails sent successfully!" });
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send emails" });
      }
    });
  } else {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
