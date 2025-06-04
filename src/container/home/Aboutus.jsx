import React from "react";
import { Link } from "react-router-dom";

export default function Aboutus({ isPage }) {
  return (
    <div className="about-area ptb-100 bg-F6F6F6">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image">
              <img src="/images/about/about-1.png" alt="image" />
              <img
                src="/images/about/about-shape.png"
                className="about-shape"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="single-section">
                <span>GET TO KNOW ABOUT US</span>
                <h3>A Cleaning Service That Goes Beyond the Ordinary</h3>
              </div>
              <p>
                We’re not just another car wash or home cleaning service. We
                bring professional, eco-friendly, and quality-driven cleaning
                right to your doorstep. Whether it’s your car, home, or office,
                our goal is simple — to make your space shine while making your
                life easier. With flexible scheduling, express services, and a
                commitment to quality, we’re here to set a new standard in
                convenient and reliable cleaning.
              </p>
              {/* <ul>
                <li>
                  <img src="/images/svg/about-icon1.svg" alt="image" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </li>
                <li>
                  <img src="/images/svg/about-icon1.svg" alt="image" />
                  It is a long established fact that a reader more.
                </li>
              </ul> */}
              <div className="about-booking d-flex">
                {!isPage && <Link to={'/about'} className="deafult-btn1">
                  Read More About
                </Link>}

                <h5>
                  Call for Book:
                  <a href="tel:+91 95674 98520">+91 95674 98520</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
