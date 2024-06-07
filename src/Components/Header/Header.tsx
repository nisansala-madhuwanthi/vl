import React from "react";
import CompanyLogo from "../../Assets/img/vibes-lanka-logo.png";
import "./Header.css";
import { Button, Image } from "antd";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg  header-reverse fixed-top">
        {/* <Row> */}
        <div className="container-fluid">
          {/* <Col> */}
          <a className="navbar-brand me-auto " href="/">
            <Image
              src={CompanyLogo}
              className="default-logo"
              alt="Logo"
              width="110px"
              height="80px"
              preview={false}
              style={{ margin: "5px", padding: "5px" }}
            />
          </a>
          {/* </Col> */}

          {/* <Col> */}
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Vibes Lanka
                <span>
                  <hr />
                </span>
              </h5>
              <Button
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></Button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className={`nav-link mx-lg-2 ${location.pathname === '/' ? 'active' : ''}`}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link mx-lg-2 ${location.pathname === '/about' ? 'active' : ''}`} href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link mx-lg-2 ${location.pathname === '/packages' ? 'active' : ''}`} href="/packages">
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link mx-lg-2 ${location.pathname === '/destination' ? 'active' : ''}`} href="/destination">
                    Destination
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link mx-lg-2 ${location.pathname === '/contact' ? 'active' : ''}`} href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="copyrights">
                <p>
                  © Copyright 2024{" "}
                  <a
                    href="/"
                    target="_self"
                    className="text-decoration-line-bottom fw-400"
                  >
                    VIBES LANKA
                  </a>
                </p>
              </div>
              <div className="social-media-icons">
                <a
                  href="https://www.facebook.com/VibesLanka"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@vibes_lanka_travels"
                  className="social-icon"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://www.instagram.com/vibes.lanka_"
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/vibes-lanka-travels-and-tours-pvt-ltd/"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              
            </div>
          </div>
          {/* </Col> */}

          {/* <Col> */}
          <a href="/contact" className="booking-button ">
            Booking
          </a>
          <Button
            className="navbar-toggler pe-0"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          {/* </Col> */}
        </div>
        {/* </Row> */}
      </nav>
    </>
  );
};

export default Header;
