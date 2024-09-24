import nodemailer from 'nodemailer';

export async function POST(request) {
  const formData = await request.formData();
  
  const name = formData.get('name');
  const phone = formData.get('phone');
  const position = formData.get('position');
  const experience = formData.get('experience');
  const coverLetter = formData.get('coverLetter');
  const email = formData.get('email');
  const resumeFile = formData.get('resume');

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const adminEmail = 'zainali5002@gmail.com';

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: 'New Job Application',
    text: `You have received a new job application from ${name}.\n\nDetails:\nName: ${name}\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience}\nCover Letter: ${coverLetter}\nEmail: ${email}`,
    attachments: [
      {
        filename: resumeFile.name,
        path: resumeFile.path,
      },
    ],
  };

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Application Received',
    text: `Hi ${name},\n\nThank you for your application for the position of ${position}. We will get back to you shortly.\n\nBest Regards,\nYour Company Name`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send emails' }), { status: 500 });
  }
}
