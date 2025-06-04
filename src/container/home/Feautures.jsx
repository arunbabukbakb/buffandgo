import React from "react";

export default function Feautures() {
  return (
    <div className="features-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>OUR FEATURES</span>
          <h3>
            We Believe in Customer <br /> Centric Cleaning Solutions
          </h3>
        </div>
        <div className="features-inner">
          <div className="row justify-content-center">
            <div className="col-lg-4 p-0 col-sm-6 col-md-6">
              <div className="features-card">
                <div className="fc-icon">
                  <span>
                    <img src="/images/svg/features1.svg" alt="image" />
                  </span>
                </div>
                <div className="fc-content">
                  <h5>Complete & Express Car Care</h5>
                  <p>
                    From quick doorstep washes to full interior and exterior
                    detailing – we deliver quality service, fast.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0 col-sm-6 col-md-6">
              <div className="features-card">
                <div className="fc-icon">
                  <span>
                    <img src="/images/svg/features2.svg" alt="image" />
                  </span>
                </div>
                <div className="fc-content">
                  <h5>Eco-Friendly & Safe Cleaning</h5>
                  <p>
                    We use water-efficient, non-toxic methods that are safe for
                    your vehicle, your home, and the environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0 col-sm-6 col-md-6">
              <div className="features-card">
                <div className="fc-icon">
                  <span>
                    <img src="/images/svg/features3.svg" alt="image" />
                  </span>
                </div>
                <div className="fc-content">
                  <h5>Convenient, Affordable & Guaranteed</h5>
                  <p>
                    Flexible scheduling, transparent pricing, and quality
                    assurance – we make sure every clean meets your standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="funfect-area">
          <div className="funfacts-inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-6 col-sm-6">
                <div className="single-funfacts-box">
                  <h3>
                    <span className="odometer" data-count="410">
                      00
                    </span>
                    <span className="content">K</span>
                  </h3>
                  <p>Trucks Washed</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 col-sm-6">
                <div className="single-funfacts-box">
                  <h3>
                    <span className="odometer" data-count="1430">
                      00
                    </span>
                    <span className="content">K</span>
                  </h3>
                  <p>Cars Washed</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 col-sm-6">
                <div className="single-funfacts-box">
                  <h3>
                    <span className="odometer" data-count="879">
                      00
                    </span>
                    <span className="content">K</span>
                  </h3>
                  <p>Bikes Washed</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 col-sm-6">
                <div className="single-funfacts-box">
                  <h3>
                    <span className="odometer" data-count="987">
                      00
                    </span>
                    <span className="content">K</span>
                  </h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
