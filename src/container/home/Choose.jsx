import React from "react";

export default function Choose({ homeClass }) {
  return (
    <div className={`choose-area ptb-100 bg-F6F6F6 ${homeClass ?? ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-content">
              <div className="single-section">
                <span>Why Choose Buff &Go?</span>
                <h3>
                  Expert Cleaning, <br />
                  Delivered to Your Doorstep
                </h3>
              </div>
              {/* <p>
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected.
              </p> */}
              <ul>
                <li>
                  <img src="/images/svg/about-icon1.svg" alt="image" />
                  <h6>No More Queues or Traffic</h6>
                  <p>
                    Skip the wait and let us come to you — fast, easy, and
                    stress-free service at your location.
                  </p>
                </li>
                <li>
                  <img src="/images/svg/about-icon1.svg" alt="image" />
                  <h6>Experienced & Professional Staff</h6>
                  <p>
                    Our trained team ensures top-notch service with attention to
                    detail and care in every clean.
                  </p>
                </li>
                <li>
                  <img src="/images/svg/about-icon1.svg" alt="image" />
                  <h6>Quality Products for Every Car Type</h6>
                  <p>
                    We use trusted, safe, and effective products tailored for
                    all vehicle makes and materials.
                  </p>
                </li>
                <li>
                  <img src="/images/svg/about-icon1.svg" alt="image" />
                  <h6>Trusted by Hundreds of Happy Owners</h6>
                  <p>
                    With a growing community of satisfied customers, our
                    reputation speaks for itself.
                  </p>
                </li>
                <li>
                  <img src="/images/svg/about-icon1.svg" alt="image" />
                  <h6>Fast, Reliable & Hassle-Free</h6>
                  <p>
                    From booking to completion, we make the entire experience
                    smooth and efficient.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="before-after-area">
              <div className="before-after-content ml-15">
                <div className="ba-slider">
                  <img src="/images/choose/choose2.png" alt="after" />
                  <div className="resize">
                    <img src="/images/choose/choose1.png" alt="before" />
                  </div>
                  <span className="handle"></span>
                </div>
              </div>
              <div className="before-after-shape">
                <img
                  src="/images/choose/before.png"
                  className="before-shape"
                  alt="image"
                />
                <img
                  src="/images/choose/after.png"
                  className="after-shape"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
