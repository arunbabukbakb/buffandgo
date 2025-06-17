import React from "react";

export default function Video() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="video-area pt-100 pb-70">
      <div className="container">
        {/* <div className="section-title">
                    <span>WASHING VIDEO</span>
                    <h3>We Believe in Customer Centric <br /> Car Washes</h3>
                </div>
                <div className="video-inner">
                    <img src="/images/video/video-image.jpg" alt="image" />
                    <div className="video-icon">
                        <a className="popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto">
                            <i class='flaticon-play' ></i>
                        </a>
                    </div>
                </div> */}
        <div className="pricing-area">
          <div className="section-title">
            <span>Choose your Wash</span>
            {/* <h3>
              Packages For All Types <br /> of Car
            </h3> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
              <div className="pricing-card d-flex flex-column justify-content-between">
                <h3>
                  <del className="text-muted">₹200</del> ₹199
                </h3>
                <h6>Basic</h6>
                <div className="pricing-list">
                  <ul className="ps-3">
                    <li>
                      <p>Exterior Foam wash</p>
                    </li>
                    <li>
                      <p>Tyre Polish</p>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn mt-auto">
                  <a onClick={scrollToTop} className="deafult-btn1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
              <div className="pricing-card d-flex flex-column justify-content-between">
                <h3>
                  <del className="text-muted">₹399</del> ₹349
                </h3>
                <h6>Standard Pack</h6>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <p>Basic wash</p>
                    </li>
                    <li>
                      <p>Interior Vaccuum</p>
                    </li>
                    <li>
                      <p>Dashboard Polish</p>
                    </li>
                    <li>
                      <p> Interior wiping</p>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn mt-auto">
                  <a onClick={scrollToTop} className="deafult-btn1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
              <div className="pricing-card d-flex flex-column justify-content-between">
                <h3>
                  <del className="text-muted">₹599</del> ₹549
                </h3>
                <h6>Premium Pack</h6>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <p>Standard wash</p>
                    </li>
                    <li>
                      <p>Interior Shampoo wash & Deep cleaning</p>
                    </li>
                    <li>
                      <p>Waxing all interior leather & Fibre parts</p>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn mt-auto">
                  <a onClick={scrollToTop} className="deafult-btn1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-title pt-5">
            <span>MONTHLY PACKAGES</span>
            {/* <h3>
              Packages For All Types <br /> of Car
            </h3> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6 mb-3">
              <div className="pricing-card d-flex flex-column justify-content-between">
                <h3>
                  <del className="text-muted">₹600</del> ₹599
                </h3>
                <h6>Basic Pack</h6>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <p>Exterior Form wash</p>
                    </li>
                    <li>
                      <p>Tyre Polish</p>
                    </li>
                    <li>
                      <p>3 times in a month</p>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn mt-auto">
                  <a onClick={scrollToTop} className="deafult-btn1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 mb-3">
              <div className="pricing-card d-flex flex-column justify-content-between">
                <h3>
                  <del className="text-muted">₹799</del> ₹700
                </h3>
                <h6>Standard Pack</h6>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <p>3 Exterior Form Washing</p>
                    </li>
                    <li>
                      <p>Tyre polish</p>
                    </li>
                    <li>
                      <p>1 Interior Vacuum</p>
                    </li>
                    <li>
                      <p> Dashboard Polish</p>
                    </li>
                    <li>
                      <p>Interior Wiping</p>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn mt-auto">
                  <a onClick={scrollToTop} className="deafult-btn1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 mb-3">
              <div className="pricing-card d-flex flex-column justify-content-between">
                <h3>
                  <del className="text-muted">₹1197</del> ₹999
                </h3>
                <h6>Premium Pack</h6>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <p>Exterior Form Washing</p>
                    </li>
                    <li>
                      <p>Tyre polish</p>
                    </li>
                    <li>
                      <p>Interior Vacuum</p>
                    </li>
                    <li>
                      <p> Dashboard polish</p>
                    </li>
                    <li>
                      <p>Interior Wiping</p>
                    </li>
                    <li>
                      <p>3 Times in a month</p>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn mt-auto">
                  <a onClick={scrollToTop} className="deafult-btn1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 mb-3">
              <div className="pricing-card d-flex flex-column justify-content-between">
                <h3>
                  <del className="text-muted">₹1397</del> ₹1099
                </h3>
                <h6>Ultimate Pack</h6>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <p>3 Exterior Form Washing</p>
                    </li>
                    <li>
                      <p>Interior Vacuum Cleaning</p>
                    </li>
                    <li>
                      <p>Tyre polish</p>
                    </li>
                    <li>
                      <p> Dashboard Polish</p>
                    </li>
                    <li>
                      <p>1 Interior shampoo wash & Deep cleaning</p>
                    </li>
                    <li>
                      <p>Waxing all interior leather & Fibre parts</p>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn mt-auto">
                  <a onClick={scrollToTop} className="deafult-btn1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-shape">
        <img
          src="/images/shapes/video-shape.png"
          className="video-shape1"
          alt="image"
        />
        <img
          src="/images/shapes/video-shape2.png"
          className="video-shape2"
          alt="image"
        />
      </div>
    </div>
  );
}
