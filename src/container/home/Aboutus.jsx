import React from 'react'

export default function Aboutus() {
    return (
        <div className="about-area ptb-100 bg-F6F6F6">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image">
                            <img src="/images/about/about-1.png" alt="image" />
                            <img src="/images/about/about-shape.png" className="about-shape" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="single-section">
                                <span>GET TO KNOW ABOUT US</span>
                                <h3>A Car Wash Platform is Different From Any Other</h3>
                            </div>
                            <p>There are many variations of passages of available but the majority have
                                suffered alteration in some form, by injected humou or randomised words even slightly believable ullam perspiciatis deserunt</p>
                            <ul>
                                <li>
                                    <img src="/images/svg/about-icon1.svg" alt="image" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                </li>
                                <li>
                                    <img src="/images/svg/about-icon1.svg" alt="image" />
                                    It is a long established fact that a reader more.
                                </li>
                            </ul>
                            <div className="about-booking d-flex">
                                <a href="about-us.html" className="deafult-btn1">Read More About</a>
                                <h5>Call for Book:
                                    <a href="tel:452332097">45-23-320-97</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
