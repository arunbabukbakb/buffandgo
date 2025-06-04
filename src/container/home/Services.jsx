import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  loop: true,
  margin: 50,
  nav: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000, // 🔸 Enables autoplay
  autoplayTimeout: 4000, // 🔸 3 seconds per slide
  autoplayHoverPause: true, // 🔸 Pause on hover
  items: 3,
  center: true, // 🔸 Centers the active slide
  responsive: {
    0: {
      items: 1, // Mobile devices
    },
    600: {
      items: 2, // Tablets
    },
    1000: {
      items: 3, // Desktops
    },
  },
};

export default function Services({ homeClass }) {
  return (
    <div className={`service-area ptb-100 ${homeClass ?? ""}`}>
      <div className="container">
        <div className="section-title">
          <span>OUR SERVICES</span>
          <h3>A Variety of Wash Options </h3>
        </div>
        <OwlCarousel
          className="service-slider owl-carousel owl-theme"
          {...options}
        >
          <div className="service-card">
            <div className="service-image">
              <a href="service-details.html">
                <img src="/images/service/service1.jpg" alt="image" />
              </a>
            </div>
            <div className="service-content">
              <h5>
                <a href="service-details.html">Doorstep Car Wash</a>
              </h5>
              <p>
                We arrive at your location with everything needed for a
                professional clean.{" "}
              </p>{" "}
            </div>
            <a href="service-details.html" className="read">
              Read More
            </a>
          </div>
          <div className="service-card">
            <div className="service-image">
              <a href="service-details.html">
                <img src="/images/service/service2.jpg" alt="image" />
              </a>
            </div>
            <div className="service-content">
              <h5>
                <a href="service-details.html">Interior & Exterior Detailing</a>
              </h5>
              <p>
                From seats to shine, we detail your car inside and out with
                care.
              </p>
            </div>
            <a href="service-details.html" className="read">
              Read More
            </a>
          </div>
          <div className="service-card">
            <div className="service-image">
              <a href="service-details.html">
                <img src="/images/service/service3.jpg" alt="image" />
              </a>
            </div>
            <div className="service-content">
              <h5>
                <a href="service-details.html">Eco-Friendly Cleaning</a>
              </h5>
              <p>
                Safe, water-saving techniques that protect your vehicle and the
                planet.
              </p>
            </div>
            <a href="service-details.html" className="read">
              Read More
            </a>
          </div>
          <div className="service-card">
            <div className="service-image">
              <a href="service-details.html">
                <img src="/images/service/service1.jpg" alt="image" />
              </a>
            </div>
            <div className="service-content">
              <h5>
                <a href="service-details.html">Affordable Plans</a>
              </h5>
              <p>
                Transparent pricing that fits your needs without any hidden
                costs involved.
              </p>
            </div>
            <a href="service-details.html" className="read">
              Read More
            </a>
          </div>
          <div className="service-card">
            <div className="service-image">
              <a href="service-details.html">
                <img src="/images/service/service2.jpg" alt="image" />
              </a>
            </div>
            <div className="service-content">
              <h5>
                <a href="service-details.html">Convenient Scheduling</a>
              </h5>
              <p>
                Book your service when it suits you best — we’re always on your
                time.
              </p>
            </div>
            <a href="service-details.html" className="read">
              Read More
            </a>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
