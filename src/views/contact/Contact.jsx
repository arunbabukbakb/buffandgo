import React from 'react'
import PageTitle from '../../container/pagetitle/PageTitle'

export default function Contact() {
    return (
        <>
            {/* PAGE TITLE */}
            <PageTitle title={"Contact Us"} link={'/contact'} />


            {/* <!-- Question area start --> */}
            <div className="question-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="qn-content">
                                <div className="single-section">
                                    <span>CONTACT US</span>
                                    <h3>Let's Talk</h3>
                                </div>
                                <p>We’re here to help with all your car, home, and office cleaning needs. Whether you have a question or need a service, feel free to reach out — we’re just a call or message away.</p>
                                <ul className="q-contact">
                                    <li>
                                        <i className="flaticon-phone-call"></i>
                                        <a href="tel:+91 95674 98520">+91 95674 98520 | +91 95261 62310</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        buffandgoautocare@gmail.com
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        7/276, Ambalavattom, Edarikode Post,
                                        Malappuram, Kerala – 676501, India
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="leave-coment leave-coment2">
                                <h3>Get in Touch</h3>
                                <form id="contactForm" className="contact-from">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" id="name1" className="form-control" placeholder="Your Name" required data-error="Please enter your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" id="name2" className="form-control" placeholder="Your Email" required data-error="Please enter your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="number" id="name3" className="form-control" placeholder="Your Phone" required data-error="Please enter your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" cols="30" rows="8" placeholder="Your Message" required data-error="Write your message"></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="deafult-btn1">
                                                Send Message
                                            </button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Question area end --> */}

            {/* <!-- Map  area start --> */}
            <div className="contact-map-area">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.620264218302!2d76.05275177481612!3d10.974414855842287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba62a61d1d1ea41%3A0x56c5e49e44b7f63!2sAmbalavattom%2C%20Edarikode%2C%20Kerala%20676501!5e0!3m2!1sen!2sin!4v1717488777431!5m2!1sen!2sin"
                    width="100%"
                    height="740px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* <!-- Map  area end --> */}
        </>
    )
}
