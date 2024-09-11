import React from "react";

function ContactForm() {
  return (
    <>
      <div className="form-section pt-120 pb-120" id="contact">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="section-title primary4">
                <span>-Get in Touch-</span>
                <h3>Let’s Get in Touch</h3>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <form>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        name="fname"
                        placeholder="Your Name: *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        name="fname"
                        placeholder="Your E-mail:"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        name="fname"
                        placeholder="Phone Number:"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input type="text" name="fname" placeholder="Subject:" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <textarea
                        name="message"
                        cols={30}
                        rows={6}
                        placeholder="Write A Question "
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <input
                      type="submit"
                      defaultValue=""
                      value="Send Now"
                      className="eg-btn btn--submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
