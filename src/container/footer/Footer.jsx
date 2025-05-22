import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className={`footer-area`}>
            <div className="container">
                <div className="inner-footer ptb-100">
                    <div className="row">
                        <div className="col-lg-4 col-sm-7">
                            <div className="footer-widget footer-widget-style2">
                                <img src="/images/logo.png" alt="logo" />
                                <p>Lorem ipsum dolor sit amet, consectetur adip
                                    elit, sed do eiusmo tempor incididunt ut labore dolore magna aliqua. Quis ipsum susp endio risus commodo vel facilisis.</p>
                                <ul className="social-link">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-5">
                            <div className="footer-widget">
                                <h4>Useful Links</h4>
                                <ul className="links">
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="team.html">Team</a>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="contact-us.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4>Our Services</h4>
                                <ul className="links">
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="service-details.html">Tyres & Alignments</a>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="pricing.html">Headers & Gaskets</a>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="services.html">General Car & Service</a>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="faq.html">Dyno Tuning & Timing </a>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <a href="team.html">Belts Engino Diagnastics</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4>Get In Touch</h4>
                                <p>Lorem ipsum dolor sit amet consec
                                    tetur adip elit sed do .</p>

                                <ul className="contact">
                                    <li>
                                        <i className="flaticon-phone-call"></i>
                                        <a href="tel:11234567890">+1 (123) 456 7890</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#5b32353d341b3834212e75383436"><span className="__cf_email__" data-cfemail="d3babdb5bc93b0bca9a6fdb0bcbe">[email&#160;protected]</span></a>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        123 Stanton, Virginia, USA
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <p>© <span>Cozu</span> All Rights Reserved By <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ul className="inner-link">
                                <li>
                                    <a href="terms-conditions.html">Terms & Conditions </a>
                                </li>
                                <li>
                                    <a href="terms-conditions.html">Claim</a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">  Privacy & Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}