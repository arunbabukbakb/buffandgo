import React, { useEffect, useRef } from "react";

export default function Banner() {
  const bannerRef = useRef(null);
  return (
    <div className="hero-area">
      <div className="container-fluid">
        <div className="hero-content">
          <span>MODERN EQUIPMENT</span>
          <h1>We bring the shine, You stay inside</h1>
          <p>
            Tired of waiting at car wash centers? With Buff & Go, professional
            car cleaning comes straight to your doorstep—whether you're at home,
            the office, or anywhere in between. Just book a slot, and we’ll take
            care of the rest.
          </p>

          <a href="service-details.html" className="deafult-btn1">
            Browse Services
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/images/banner/banner-shape1.png"
            className="car-man"
            alt="image"
          />
        </div>

        <form>
          <ul className="hero-search-box d-flex">
            <li>
              <label>
                <i class="bx bx-map"></i>
                Where
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="New York"
              />
            </li>
            <li>
              <label>
                <i className="flaticon-car-wash"></i>
                Type of your car
              </label>
              <div className="languages-switcher">
                <select>
                  <option value="1">Sports Car</option>
                  <option value="2">Marsitize</option>
                  <option value="3">Ferari</option>
                  <option value="4">BMW</option>
                </select>
              </div>
            </li>
            <li>
              <label>
                <i className="flaticon-calendar-1"></i>
                Pick-up Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="25/07/2024"
                id="datepicker1"
              />
            </li>
            <li className="last-box last-box2">
              <label>
                <i className="flaticon-calendar-1"></i>
                Return Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="22/07/2024"
                id="datepicker2"
              />
            </li>
            <li className="last-box">
              <button type="submit" className="deafult-btn1 style3">
                Book Services
              </button>
            </li>
          </ul>
        </form>

        <div className="hero-shape">
          <img
            src="/images/shapes/banner-shaoe1.png"
            className="hero-s-1"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe2.png"
            className="hero-s-2"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe3.png"
            className="hero-s-3"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe4.png"
            className="hero-s-4"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe5.png"
            className="hero-s-5"
            alt="image"
          />
          <img
            src="/images/shapes/banner-shaoe2.png"
            className="hero-s-6"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
