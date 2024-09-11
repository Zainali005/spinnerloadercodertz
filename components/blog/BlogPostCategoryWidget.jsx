import React from "react";

function BlogPostCategoryWidget() {
  return (
    <>
      <div className="blog-widget-item">
        <div className="blog-category">
          <h5 className="blog-widget-title">Post Category</h5>
          <div className="blog-widget-body">
            <ul className="category-list">
              <li>
                <a href="#">
                  <span>Branding</span>
                  <span>
                    <i className="bi bi-chevron-right" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Creative Agency</span>
                  <span>
                    <i className="bi bi-chevron-right" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>One Page Template</span>
                  <span>
                    <i className="bi bi-chevron-right" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Inspiration</span>
                  <span>
                    <i className="bi bi-chevron-right" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Business</span>
                  <span>
                    <i className="bi bi-chevron-right" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostCategoryWidget;
