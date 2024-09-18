import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import CountUp from "react-countup";
import Link from "next/link";

function Activities() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="activities-section pt-80 pb-80">
        <img
          src="assets/images/bg/water-mark1.png"
          alt="image"
          className="img-fluid water-mark1"
        />
        <img
          src="assets/images/bg/water-mark2.png"
          alt="image"
          className="img-fluid water-mark2"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="section-title primary3">
                <span>-Our Culture-</span>
                <h3>Our Company Activities</h3>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="activities-area d-flex flex-wrap justify-content-center">
              <div className="activity-item p-3">
                <strong>Traditions and Festivals:</strong> Our culture is rich
                with vibrant festivals and traditions that celebrate community,
                family, and spirituality. Events like Diwali, Eid, and Christmas
                bring people together in joyous celebrations.
              </div>
              <div className="activity-item p-3">
                <strong>Diverse Cuisine:</strong> Our food reflects a blend of
                flavors and ingredients, showcasing regional specialties. From
                spicy curries to sweet desserts, our cuisine emphasizes the
                importance of sharing meals with loved ones.
              </div>
              <div className="activity-item p-3">
                <strong>Art and Craft:</strong> Our culture is home to various
                forms of art, including traditional music, dance, and
                handicrafts. These art forms often tell stories and convey
                historical significance, preserving our heritage.
              </div>
              <div className="activity-item p-3">
                <strong>Respect for Elders:</strong> There’s a strong emphasis
                on family values and respect for elders. Elders are seen as
                keepers of wisdom, and their guidance is highly valued in
                decision-making.
              </div>
              <div className="activity-item p-3">
                <strong>Community and Hospitality:</strong> A sense of community
                is central to our culture. Hospitality is a cherished value,
                with open arms welcoming guests and friends alike, creating
                bonds that last a lifetime.
              </div>
            </div>

            <div
              className="company-counter wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <div className="row g-4 d-flex justify-content-center">
                {[
                  { count: 50, label: "Team Members" },
                  { count: 120, label: "Projects Delivered" },
                  { count: 15, label: "Partners" },
                  { count: 25, label: "Awards Won" },
                ].map((item, index) => (
                  <div
                    className="col-lg-3 col-md-6 col-sm-10 col-10"
                    key={index}
                  >
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay={`${0.6 + index * 0.2}s`}
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer">
                          <CountUp end={item.count} delay={2} duration={5} />+
                        </h2>
                        <Link href="#">{item.label}</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="TboWOSW7qCI"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Activities;
