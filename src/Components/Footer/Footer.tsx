import React, { useRef, useState } from "react";
import Image01 from "../../Assets/img/vertical-center-line-bg-dark.svg";
import img from "../../Assets/img/vibes-lanka-footer.png";
import "./Footer.css";

const Footer = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwYegj5uraGJq1jSdVwY1i_sIepBE7eYYfjKE-aSGkcCXSNdj12ARVUaj3ypiixxQj_/exec";
  const formRef = useRef(null);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const form = formRef.current as unknown as HTMLFormElement;

    if (form) {
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          setMsg("Thanks for contacting us. We will get back to you soon.");
          setTimeout(() => {
            setMsg("");
          }, 5000);
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    }
  };

  return (
    <>
      <footer
        className="bg-very-light-gray pb-50px sm-pt-20px xs-pb-30px footer-background-repeat footer-background-position-center sm-background-image-none "
        style={{ backgroundImage: `url(${Image01})`, marginTop: "-175.5px" }}
      >
        <div className="footer-container">
          <div
            className="footer-row overlap-section"
            // style={{ marginTop: "-175.5px;" }}
          >
            {/* <div className="col-12 text-center">
              <img
                className="rounded-circle"
                src={Image02}
                alt=""
                data-no-retina=""
              />
            </div> */}
          </div>

          <div className="footer-row justify-content-center mb-4">
            <div className="col-xl-6 col-lg-8 col-md-10 text-center">
              <h3 className="text-dark-gray alt-font ls-minus-2px fw-400 mb-40px xs-mb-30px w-80 xs-w-100 mx-auto">
                Get the amazing offers into your inbox!
              </h3>
              <div className="d-inline-block w-100 newsletter-style-03 position-relative mb-20px">
                <form
                  method="post"
                  className="position-relative w-100"
                  name="submit-to-google-sheet"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <input
                    className="input-large bg-white border-color-transparent w-100 border-radius-100px box-shadow-extra-large form-control required"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                  <input type="hidden" name="redirect" value="" />
                  <button
                    className="btn btn-large text-dark-gray ls-0px left-icon submit text-uppercase fw-700"
                    aria-label="submit"
                  >
                    <i className="fas fa-envelope icon-small text-base-color"></i>
                    <span>Subscribe</span>
                  </button>
                  <div className="form-results border-radius-100px pt-10px pb-10px ps-15px pe-15px fs-16 mt-10px w-100 text-center position-absolute d-none"></div>
                  <span id="msg" style={{ color: "green" }}>
                    {msg}
                  </span>
                </form>
              </div>
              <p className="fs-16">
                We are committed to protecting your{" "}
                <a
                  href="/privacy"
                  className="text-decoration-line-bottom text-dark-gray"
                >
                  privacy policy.
                </a>
              </p>
            </div>
          </div>

          {/* <div className="footer-row row-cols-3 row-cols-lg-5 row-cols-sm-3 align-items-center justify-content-center mb-4 md-mb-50px xs-mb-40px instagram-follow-api position-relative">
            <div className="col instafeed-grid md-mb-30px xs-mb-15px">
              <figure className="border-radius-0px">
                <a href="https://www.instagram.com/vibes.lanka_/" target="_self">
                  <img
                    src={instaImg01}
                    className="insta-image"
                    alt=""
                    data-no-retina=""
                  />
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </a>
              </figure>
            </div>
            <div className="col instafeed-grid md-mb-30px xs-mb-15px">
              <figure className="border-radius-0px">
                <a href="https://www.instagram.com/vibes.lanka_/" target="_self">
                  <img
                    src={instaImg02}
                    className="insta-image"
                    alt=""
                    data-no-retina=""
                  />
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </a>
              </figure>
            </div>
            <div className="col instafeed-grid md-mb-30px xs-mb-15px">
              <figure className="border-radius-0px">
                <a href="https://www.instagram.com/vibes.lanka_/" target="_self">
                  <img
                    src={instaImg03}
                    className="insta-image"
                    alt=""
                    data-no-retina=""
                  />
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </a>
              </figure>
            </div>
            <div className="col instafeed-grid">
              <figure className="border-radius-0px">
                <a href="https://www.instagram.com/vibes.lanka_/" target="_self">
                  <img
                    src={instaImg04}
                    className="insta-image"
                    alt=""
                    data-no-retina=""
                  />
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </a>
              </figure>
            </div>
            <div className="col instafeed-grid">
              <figure className="border-radius-0px">
                <a href="https://www.instagram.com/vibes.lanka_/" target="_self">
                  <img
                    src={instaImg05}
                    className="insta-image"
                    alt=""
                    data-no-retina=""
                  />
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </a>
              </figure>
            </div>
            <div className="absolute-middle-center z-index-1 w-auto">
              <a
                href="https://www.instagram.com/vibes.lanka_/"
                target="_self"
                className="btn btn-large btn-switch-text btn-white btn-rounded left-icon btn-box-shadow instagram-button"
              >
                <span>
                  <span>
                    <i className="fa-brands fa-instagram text-base-color"></i>
                  </span>
                  <span className="btn-double-text" data-text="Follow crafto">
                    Follow Vibes Lanka
                  </span>
                </span>
              </a>
            </div>
          </div> */}

          {/* <div className="footer-row align-items-center"> */}

          {/* <div className="col-xl-3 col-sm-6 text-center text-sm-start last-paragraph-no-margin fs-15 order-3 order-md-1">
              <p>
                © Copyright 2024{" "}
                <a
                  href="/"
                  target="_self"
                  className="text-decoration-line-bottom text-dark-gray fw-500"
                >
                  VIBES LANKA
                </a>
              </p>
            </div> */}

          {/* <div className="col-xl-6 text-center lg-mt-10px sm-mt-0 sm-mb-10px order-1 order-xl-2 order-md-3">
              <ul className="footer-navbar fs-17 fw-600">
                <li className="nav-item active">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/about"
                    className="nav-link"
                  >
                    About 
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/packages"
                    className="nav-link"
                  >
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/destination"
                    className="nav-link"
                  >
                    Destinations
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/contact"
                    className="nav-link"
                  >
                    Contact
                  </a>
                </li>
                
              </ul>
            </div> */}

          {/* <div className="col-xl-3 col-sm-6 position-relative text-center text-sm-end elements-social social-text-style-01 order-2 order-xl-3 xs-mb-10px">
              <ul className="fs-16 dark fw-600">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/"
                    target="_self"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/vibes.lanka_/"
                    target="_self"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="tiktok"
                    href="https://www.tiktok.com"
                    target="_self"
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                </li>
               
              </ul>
            </div> */}

          {/* </div> */}
          <div></div>
        </div>
        <div className="overflow-hidden">
          <img className="bg " src={img} alt="footer-img" />
        </div>

        {/* <hr className="footer-line" /> */}
        {/* <div> */}
        <div className="footer-row-below ">
          <div className="text-center text-white">
            <p>
              © Copyright 2024{" "}
              <a
                href="/"
                target="_self"
                className="text-decoration-line-bottom text-white fw-700"
              >
                VIBES LANKA
              </a>
            </p>
          </div>

          {/* <div className="col-xl-6 text-center lg-mt-10px sm-mt-0 sm-mb-10px order-1 order-xl-2 order-md-3">
  <ul className="footer-navbar fs-17 fw-600">
    <li className="nav-item active">
      <a href="/" className="nav-link">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        href="/about"
        className="nav-link"
      >
        About 
      </a>
    </li>
    <li className="nav-item">
      <a
        href="/packages"
        className="nav-link"
      >
        Packages
      </a>
    </li>
    <li className="nav-item">
      <a
        href="/destination"
        className="nav-link"
      >
        Destinations
      </a>
    </li>
    <li className="nav-item">
      <a
        href="/contact"
        className="nav-link"
      >
        Contact
      </a>
    </li>
    
  </ul>
</div> */}

          <div className="text-center elements-social social-text-style-01 ">
            <ul className="fs-16 text-white fw-600">
              <li>
                <a
                  className="facebook text-white"
                  href="https://www.facebook.com/VibesLanka"
                  target="_self"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram text-white"
                  href="https://www.instagram.com/vibes.lanka_/"
                  target="_self"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="tiktok text-white"
                  href="https://www.tiktok.com/@vibes_lanka_travels"
                  target="_self"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin text-white"
                  href="https://www.linkedin.com/company/vibes-lanka-travels-and-tours-pvt-ltd/"
                  target="_self"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
