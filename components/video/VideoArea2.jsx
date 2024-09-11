import React, { useState } from "react";

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
function VideoArea2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="video-section pt-120 pb-120">
        <img
          src="assets/images/bg/video-vctr-top.png"
          className="video-vctr-top"
          alt="image"
        />
        <img
          src="assets/images/bg/video-vctr-bottom.png"
          className="video-vctr-bottom"
          alt="image"
        />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h2>Mission is to Protect Your Business and More</h2>
              <div className="video-play style-3">
                <div
                  onClick={() => setOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="popup-youtube video-icon"
                >
                  <i className="bx bx-play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default VideoArea2;
