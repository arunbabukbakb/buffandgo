import React from 'react'
import PageTitle from '../../container/pagetitle/PageTitle'
import { Services, Testimonial, Choose } from '../../container/home'

export default function AboutUs() {
    return (
        <>
            {/* PAGE TITLE */}
            <PageTitle title={"About Us"} link={'/about'} />

            {/* ABOUTUS */}
            <div className="about-area ptb-100">
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
                                    <h3>A Car Wash Platform Is Different From Any Other</h3>
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
                                    <li>
                                        <img src="/images/svg/about-icon1.svg" alt="image" />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICES */}
            <Services homeClass="bg-F6F6F6" />

            {/* Video Area */}
            <div className="video-area4">
                <div className="container">
                    <div className="section-title">
                        <span>WASHING VIDEO</span>
                        <h3>We Believe in Customer Centric Car Washes</h3>
                    </div>
                    <div className="video-inner">
                        <img src="/images/video/video-image.jpg" alt="image" />
                        <div className="video-icon">
                            <a className="popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto">
                                <i class='flaticon-play' ></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tesimonial area */}
            <Testimonial homeClass="testimonials-area4" />

            {/* Choose area */}
            <Choose homeClass="choose-area4" />
        </>
    )
}
