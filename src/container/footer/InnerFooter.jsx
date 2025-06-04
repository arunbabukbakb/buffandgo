import React from "react";
import { Link } from "react-router-dom";

export default function InnerFooter({ isInner }) {
    return (
        <div className={`footer-area inner-footer`}>
            <div className="container">
                <div className="inner-footer ptb-100">
                    <div className="row">
                        <div className="col-lg-4 col-sm-7">
                            <div className="footer-widget footer-widget-style2">
                                <img src="/images/logo.png" alt="logo" />
                                <p>
                                    Tired of waiting at car wash centers? With Buff & Go,
                                    professional car cleaning comes straight to your
                                    doorstep—whether you're at home, the office, or anywhere in
                                    between. Just book a slot, and we’ll take care of the rest.
                                </p>
                                <ul className="social-link">
                                    <li>
                                        <a href="https://www.facebook.com/share/1Br4oEUn5n/" target="_blank">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.instagram.com/Buffandgo_auto_care" target="_blank">
                                            <i className="flaticon-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@BuffandGoAutoCare" target="_blank">
                                            <i className="fab fa-youtube"></i>
                                        </a>
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
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <Link to="contact">Contact Us</Link>
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
                                        <Link to="services">Doorstep Car Wash </Link>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <Link to="services">Interior & Exterior Detailing </Link>
                                    </li>
                                    <li>
                                        <img src="/images/svg/footer.svg" alt="svg" />
                                        <Link to="services">Eco-Friendly Cleaning </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4>Get In Touch</h4>
                                {/* <p>
                                          Lorem ipsum dolor sit amet consec tetur adip elit sed do .
                                        </p> */}

                                <ul className="contact">
                                    <li>
                                        <i className="flaticon-phone-call"></i>
                                        <Link href="tel:+919567498520">+919567498520 | +919526162310</Link>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <span
                                            className="__cf_email__"
                                            data-cfemail="d3babdb5bc93b0bca9a6fdb0bcbe"
                                        >
                                            buffandgoautocare@gmail.com
                                        </span>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        7/276 Ambalavattom, Edarikode post, Malappuram 676501
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
                            <p>
                                © All Rights Reserved By{" "}
                                <a href="https://ftns.com/" target="_blank">
                                    FTNS
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ul className="inner-link">
                                <li>
                                    <Link to="/terms">Terms & Conditions </Link>
                                </li>
                                <li>
                                    <Link to="/privacy"> Privacy & Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}