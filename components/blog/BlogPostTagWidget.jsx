import React from "react";

function BlogPostTagWidget() {
  return (
    <>
      <div className="blog-widget-item">
        <div className="post-tag">
          <h5 className="blog-widget-title">Post Tag</h5>
          <div className="blog-widget-body">
            <ul className="tag-list d-flex justify-content-start flex-wrap gap-4">
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Website UI</a>
              </li>
              <li>
                <a href="#">Agency</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">ui/Ux </a>
              </li>
              <li>
                <a href="#">Website UI</a>
              </li>
              <li>
                <a href="#">branding</a>
              </li>
              <li>
                <a href="#">agency branding</a>
              </li>
              <li>
                <a href="#">Website UI</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostTagWidget;
