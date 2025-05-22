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
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                    velit mollit Exercitation veniam consequat. Amet minim mollit non dese
                                    amet sint. Velit officia veniam consequat.</p>
                                <ul className="q-contact">
                                    <li>
                                        <i className="flaticon-phone-call"></i>
                                        <a href="tel:11234567890">+1 (123) 456 7890</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#ed84838b82ad8e829798c38e8280"><span className="__cf_email__" data-cfemail="98f1f6fef7d8fbf7e2edb6fbf7f5">[email&#160;protected]</span></a>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        123 Stanton, Virginia, USA
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.156180779021!2d4.350246915281314!3d50.84679206660858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47f4614f1f1%3A0xb03c355d8fe2cfb6!2sGrand%20Place!5e0!3m2!1sen!2sbd!4v1658434817034!5m2!1sen!2sbd" width="100%" height="740px"></iframe>
            </div>
            {/* <!-- Map  area end --> */}
        </>
    )
}
