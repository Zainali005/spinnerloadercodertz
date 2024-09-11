import React from "react";

function PostCommentWidget() {
  return (
    <>
      <div>
        <div className="commetn-area">
          <div className="comment-title">
            <h3>03 Comments</h3>
          </div>
          <ul className="comment-list">
            <li>
              <div className="comment-item">
                <div className="image">
                  <img
                    src="assets/images/blog/comment-author1.png"
                    alt="image"
                  />
                </div>
                <div className="content">
                  <div className="comment-meta">
                    <h5>Loretta Shelton</h5>
                    <span>25 January, 2022</span>
                  </div>
                  <p>
                    With the most complete toolkit on the market for businesses
                    that want to accept online payments, Stripe has established
                    itself as “The new standard in online payments
                  </p>
                  <button className="reply">
                    Reply
                    <i className="bi bi-reply" />
                  </button>
                </div>
              </div>
              <ul className="comment-reply">
                <li>
                  <div className="comment-item">
                    <div className="image">
                      <img
                        src="assets/images/blog/comment-author2.png"
                        alt="image"
                      />
                    </div>
                    <div className="content">
                      <div className="comment-meta">
                        <h5>Loretta Shelton</h5>
                        <span>25 January, 2022</span>
                      </div>
                      <p>
                        With the most complete toolkit on the market for
                        businesses that want to accept online payments, Stripe
                        has established itself as “The new standard in online
                        payments
                      </p>
                      <button className="reply">
                        Reply
                        <i className="bi bi-reply" />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="comment-item">
                <div className="image">
                  <img
                    src="assets/images/blog/comment-author3.png"
                    alt="image"
                  />
                </div>
                <div className="content">
                  <div className="comment-meta">
                    <h5>Darrell Steward</h5>
                    <span>25 August, 2022</span>
                  </div>
                  <p>
                    With the most complete toolkit on the market for businesses
                    that want...
                  </p>
                  <button className="reply">
                    Reply
                    <i className="bi bi-reply" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="comment-respond">
          <div className="comment-title">
            <h3>Write A Comments</h3>
            <p>Your email address will not be published.</p>
          </div>
          <form>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="form-inner">
                  <input type="text" name="fname" placeholder="Your Name: *" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-inner">
                  <input
                    type="text"
                    name="fname"
                    placeholder="Email Address:"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-inner">
                  <input type="text" name="fname" placeholder="Website:" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-inner">
                  <textarea
                    name="message"
                    cols={30}
                    rows={6}
                    placeholder="Write a Comments"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12 text-start">
                <input
                  type="submit"
                  value="Submit Now"
                  className="eg-btn btn--submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostCommentWidget;
