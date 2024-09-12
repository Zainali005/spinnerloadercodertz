import Link from "next/link";
import React, { useEffect, useReducer, useState } from "react";
/*---------Using reducer mange the active or inactive menu----------*/
const initialState = { activeMenu: "" };

function reducer(state, action) {
  switch (action.type) {
    case "homeOne":
      return { activeMenu: "homeOne" };
    case "service":
      return { activeMenu: "service" };
    case "project":
      return { activeMenu: "project" };
    case "blog":
      return { activeMenu: "blog" };
    case "pages":
      return { activeMenu: "pages" };
    case "contact":
      return { activeMenu: "contact" };
    default:
      return { activeMenu: "" };
  }
}
function Header4() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("sticky")
      : header.classList
      ? header.classList.remove("sticky")
      : header.classList.add("sticky");
  };

  /*----for single sidebar event use one state-------*/
  const [sidebar, setSidebar] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [showMobileSubMenu, setMobileSubMenu] = useState(false);
  const handleMobileSubMenu = () => {
    if (showMobileSubMenu === false || showMobileSubMenu === 0) {
      setMobileSubMenu(1);
    } else {
      setMobileSubMenu(false);
    }
  };
  const handleMobileMenu = () => {
    if (showMobileMenu === false || showMobileMenu === 0) {
      setMobileMenu(1);
    } else {
      setMobileMenu(false);
    }
  };
  const showSidebarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };
  const handleSearchbarBtn = () => {
    if (showSearch === false || showSearch === 0) {
      setshowSearch(1);
    } else {
      setshowSearch(false);
    }
  };
  return (
    <>
      <div
        className={
          sidebar === 1
            ? "menu-toggle-btn-full-shape show-sidebar"
            : "menu-toggle-btn-full-shape"
        }
      >
        <div className="menu-toggle-wrap bg-white">
          <div className="sidebar-top-area d-flex justify-content-between align-items-center">
            <div className="sidebar-logo px-4 py-3 rounded">
              <Link href="#">
                <a>
                  {" "}
                  <img src="/assets/images/icons/sidebar-logo.svg" alt="image" />
                </a>
              </Link>
            </div>
            <div className="cross-icon" onClick={showSidebarMenu}>
              <i className="bx bx-x" />
            </div>
          </div>
          <div className="sidebar-body">
            <div className="address-card mb-5">
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
                    <span>Address:</span>2972 Westheimer Rd. Santa &amp;,
                    Illinois 85486
                  </li>
                  <li>
                    <span>Phone:</span> +880 176 1456 456
                  </li>
                  <li>
                    <span>Email:</span> info@example.com
                  </li>
                </ul>
              </div>
              <img src="/assets/images/bg/office1.png" alt="image" />
            </div>
            <div className="blog-widget-item mb-0">
              <div className="follow-area">
                <h5 className="blog-widget-title mb-1">Follow Us</h5>
                <p className="para">Follow us on Social Network</p>
                <div className="blog-widget-body">
                  <ul className="follow-list d-flex flex-row align-items-start gap-4">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={showSearch === 1 ? "mobile-search slide" : "mobile-search"}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center gap-2">
              <div className="search-cross-btn">
                <i className="bx bx-search-alt-2" />
              </div>
              <div className="search-cross-btn" onClick={handleSearchbarBtn}>
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area style-4">
        <div className="header-logo">
          <Link href="/">
            <a>
              <img
                alt="image"
                src="/assets/images/icons/header4-logo.svg"
                className="img-fluid"
              />
            </a>
          </Link>
        </div>
        <div
          className={showMobileMenu === 1 ? "main-nav show-menu" : "main-nav"}
        >
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <Link href="/">
                <a>
                  <img alt="image"   style={{ width: '200px', height: 'auto' }} src="/assets/images/icons/footer4-logo.svg" />
                </a>
              </Link>
            </div>
            <div onClick={handleMobileMenu} className="menu-close-btn">
              <i
                className={
                  showMobileMenu === 1
                    ? "bi bi-x-lg text-white bi-chevron-down"
                    : "bi bi-x-lg text-white bi-chevron-up"
                }
              />
            </div>
          </div>
          <ul className="menu-list">
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "homeOne" })}
            >
              <Link href="#" className="drop-down">
                <a>Home</a>
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul
                className={
                  state.activeMenu === "homeOne"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/">
                    <a>Home 1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/index2">
                    <a>Home 2</a>
                  </Link>
                </li>
                <li>
                  <Link href="/index3">
                    <a>Home 3</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Home 4</a>
                  </Link>
                </li>
                <li>
                  <Link href="/index5">
                    <a>Home 5</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "pages" })}
            >
              <Link href="#" className="drop-down">
                Pages
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul
                className={
                  state.activeMenu === "pages"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/team">
                    <a>Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>Faq</a>
                  </Link>
                </li>
                <li>
                  <Link href="/job-list">
                    <a>Job List</a>
                  </Link>
                </li>
                <li>
                  <Link href="/job-details">
                    <a>Career</a>
                  </Link>
                </li>
                <li onClick={handleMobileSubMenu}>
                  <Link href="#">
                    <a>Submenu</a>
                  </Link>
                  <i className="bi bi-chevron-right dropdown-icon"></i>
                  <ul
                    className={
                      showMobileSubMenu === 1
                        ? "sub-menu d-block"
                        : "sub-menu d-none"
                    }
                  >
                    <li>
                      <Link href="#">
                        <a>Child 1</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Child 3</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Child 3</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Child 4</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "service" })}
            >
              <Link href="#" className="drop-down">
                <a>Services</a>
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul
                className={
                  state.activeMenu === "service"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/service">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/service-details">
                    <a>Services Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "project" })}
            >
              <Link href="#" className="drop-down">
                <a>Projects</a>
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul
                className={
                  state.activeMenu === "project"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/project">
                    <a>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/project-details">
                    <a>Projects Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "blog" })}
            >
              <Link href="#">
                <a>Blog</a>
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul
                className={
                  state.activeMenu === "blog"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/blog-grid">
                    <a>Blog Grid</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-standard">
                    <a>Blog Standard</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">
                    <a>Blog Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
          {/* mobile-search-area */}
          <div className="d-lg-none d-block">
            <form className="mobile-menu-form">
              <div className="input-with-btn d-flex flex-column">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="rounded-0"
                />
                <button type="submit" className="eg-btn btn--primary4 btn--sm">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="nav-right d-flex align-items-center gap-5">
          <div className="mobile-menu-btn d-lg-none d-block">
            <h5
              className="text-dark mb-0"
              style={{ cursor: "pointer" }}
              onClick={handleMobileMenu}
            >
              MENU
            </h5>
          </div>
          <div className="eg-btn header-btn">
            <Link href="/contact">
              <a>LETS TALK</a>
            </Link>
          </div>
          <ul className="header-social d-xxl-flex d-none justify-content-center align-items-center flex-row gap-3">
            <li>
              <a href="https://www.instagram.com">IN</a>
            </li>
            <li>
              <a href="https://www.facebook.com">FB</a>
            </li>
            <li>
              <a href="https://www.twitter.com">TW</a>
            </li>
            <li>
              <a href="https://www.pinterest.com">PR</a>
            </li>
          </ul>
          <div className="header-icons d-flex align-items-center">
            <div className="search-btn" onClick={handleSearchbarBtn}>
              <i className="bi bi-search" />
            </div>
            <div className="sidebar-btn" onClick={showSidebarMenu}>
              <i className="bi bi-list" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header4;
