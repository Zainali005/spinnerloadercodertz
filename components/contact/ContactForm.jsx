import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (response.status === 200) {
        setStatus("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(`Error sending email: ${response.text}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }

    // Clear status after 3 seconds
    setTimeout(() => {
      setStatus("");
    }, 3000);
  }

  return (
    <div className="form-section pt-120 pb-120" id="contact">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="section-title primary4">
              <span>-Get in Touch-</span>
              <h3>Let’s Get in Touch</h3>
              <p className="para">
                Get the most of reduction in your team’s operating costs for the
                whole product which creates amazing UI/UX experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="form-inner">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name: *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your E-mail:"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number:"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject:"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-inner">
                    <textarea
                      name="message"
                      cols={30}
                      rows={6}
                      placeholder="Write A Question"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <input
                    type="submit"
                    value="Send Now"
                    className="eg-btn btn--submit"
                  />
                </div>
              </div>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
