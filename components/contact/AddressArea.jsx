import React from "react";

function AddressArea() {
  return (
    <>
      <div className="address-section pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="section-title primary4">
                <span>-Our Office-</span>
                <h3>Office Near You</h3>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="address-card">
                <div className="content">
                  <div className="header">
                    <div className="location">
                      <svg
                        width={18}
                        height={22}
                        viewBox="0 0 18 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 22C9 22 17.25 14.1818 17.25 8.25C17.25 6.06196 16.3808 3.96354 14.8336 2.41637C13.2865 0.869194 11.188 0 9 0C6.81196 0 4.71354 0.869194 3.16637 2.41637C1.61919 3.96354 0.75 6.06196 0.75 8.25C0.75 14.1818 9 22 9 22ZM9 12.375C7.90598 12.375 6.85677 11.9404 6.08318 11.1668C5.3096 10.3932 4.875 9.34402 4.875 8.25C4.875 7.15598 5.3096 6.10677 6.08318 5.33318C6.85677 4.5596 7.90598 4.125 9 4.125C10.094 4.125 11.1432 4.5596 11.9168 5.33318C12.6904 6.10677 13.125 7.15598 13.125 8.25C13.125 9.34402 12.6904 10.3932 11.9168 11.1668C11.1432 11.9404 10.094 12.375 9 12.375Z" />
                      </svg>
                    </div>
                    <h3>New York</h3>
                  </div>
                  <ul className="address-list">
                    <li>
                      <span>Address:</span>
                      Defence Avenue Mall, DHA 1 &amp;, Islamabad
                    </li>
                    <li>
                      <span>Phone:</span> +92 314 9709315
                    </li>
                    <li>
                      <span>Email:</span> info@codeertz.com
                    </li>
                  </ul>
                </div>
                <img src="assets/images/bg/office1.png" alt="image" />
              </div>
            </div>
             </div>
        </div>
      </div>
    </>
  );
}

export default AddressArea;
