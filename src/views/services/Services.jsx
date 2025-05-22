import React from 'react'
import PageTitle from '../../container/pagetitle/PageTitle'
import Newsletter from '../../container/Newsletter/Newsletter'

export default function Services() {
    return (
        <>
            {/* PAGE TITLE */}
            <PageTitle title={"Our Services"} link={'/services'} />

            {/* SERVICES */}
            {/* <!-- Service area start --> */}
            <div className="service-area pt-100 pb-70 service-area9">
                <div className="container">
                    <div className="section-title">
                        <span>OUR SERVICES</span>
                        <h3>A Variety of Wash Options for Your Car</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-card service-card9">
                                <div className="service-image">
                                    <a href="service-details.html"><img src="/images/service/service1.jpg" alt="image" /></a>
                                </div>
                                <div className="service-content">
                                    <h5><a href="service-details.html">Exterior Washing</a></h5>
                                    <p>Lorem ipsum dolor sit amet, conse eiusdo
                                        adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                                </div>
                                <a href="service-details.html" className="read">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-card service-card9">
                                <div className="service-image">
                                    <a href="service-details.html"><img src="/images/service/service2.jpg" alt="image" /></a>
                                </div>
                                <div className="service-content">
                                    <h5><a href="service-details.html">Interior Washing
                                    </a></h5>
                                    <p>Lorem ipsum dolor sit amet, conse eiusdo
                                        adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                                </div>
                                <a href="service-details.html" className="read">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-card service-card9">
                                <div className="service-image">
                                    <a href="service-details.html"><img src="/images/service/service3.jpg" alt="image" /></a>
                                </div>
                                <div className="service-content">
                                    <h5><a href="service-details.html">Vacuum Cleaning
                                    </a></h5>
                                    <p>Lorem ipsum dolor sit amet, conse eiusdo
                                        adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                                </div>
                                <a href="service-details.html" className="read">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-card service-card9">
                                <div className="service-image">
                                    <a href="service-details.html"><img src="/images/service/service4.jpg" alt="image" /></a>
                                </div>
                                <div className="service-content">
                                    <h5><a href="service-details.html">Hand Car Wash
                                    </a></h5>
                                    <p>Lorem ipsum dolor sit amet, conse eiusdo
                                        adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                                </div>
                                <a href="service-details.html" className="read">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-card service-card9">
                                <div className="service-image">
                                    <a href="service-details.html"><img src="/images/service/service5.jpg" alt="image" /></a>
                                </div>
                                <div className="service-content">
                                    <h5><a href="service-details.html">Chemical Car Wash
                                    </a></h5>
                                    <p>Lorem ipsum dolor sit amet, conse eiusdo
                                        adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                                </div>
                                <a href="service-details.html" className="read">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-card service-card9">
                                <div className="service-image">
                                    <a href="service-details.html"><img src="/images/service/service6.jpg" alt="image" /></a>
                                </div>
                                <div className="service-content">
                                    <h5><a href="service-details.html">Steam Car Wash
                                    </a></h5>
                                    <p>Lorem ipsum dolor sit amet, conse eiusdo
                                        adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                                </div>
                                <a href="service-details.html" className="read">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="result-pagination search-pagination">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">
                                            <i className="flaticon-back"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="service-details.html">01</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="service-details.html">02</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="service-details.html">03</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link active" href="service-details.html" aria-label="Next">
                                        <span aria-hidden="true">
                                            <i className="flaticon-next"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <img src="/images/foodls.png" className="foodls" alt="image" />
                </div>
            </div>
            {/* <!-- Service area End --> */}

            {/* <!-- Need help area start --> */}
            <div className="need-help-area">
                <div className="container">
                    <div className="inner-help-area">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="help-content">
                                    <span>LET'S TALK</span>
                                    <h3>Do You Need Help Your Car?</h3>
                                    <p>Send us a message, or phone 1-800 234 567 between 09:00 and 18:00 Mon-Sat.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="help-button">
                                    <a href="contact-us.html" className="deafult-btn1">Request a Call Back</a>
                                </div>
                            </div>
                        </div>
                        <img src="/images/service/service-inner.png" className="service-inner" alt="image" />
                    </div>
                </div>
            </div>
            {/* <!-- Need help area end --> */}

            {/* <!-- Workshop area start --> */}
            <div className="workshop-area ptb-100 bg-F6F6F6">
                <div className="container">
                    <div className="section-title">
                        <span>WHY CHOOSE US</span>
                        <h3>We Have a Car Workshop <b />Near You</h3>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="work-list">
                                <ul>
                                    <li>
                                        <div className="work-icon">
                                            <i className="flaticon-hand-gesture"></i>
                                        </div>
                                        <h5>High Quality</h5>
                                        <p>Lorem ipsum dolor sit amet, conse eius
                                            adipiscing elit, sed do eiusm.</p>
                                    </li>
                                    <li>
                                        <div className="work-icon">
                                            <i className="flaticon-room-service"></i>
                                        </div>
                                        <h5>Organic Products</h5>
                                        <p>Lorem ipsum dolor sit amet, conse eius
                                            adipiscing elit, sed do eiusm.</p>
                                    </li>
                                    <li>
                                        <div className="work-icon">
                                            <i className="flaticon-chauffeur"></i>
                                        </div>
                                        <h5>Talented Workers</h5>
                                        <p>Lorem ipsum dolor sit amet, conse eius
                                            adipiscing elit, sed do eiusm.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="work-image">
                                <img src="/images/service/work.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="work-list details-bottom ">
                                <ul>
                                    <li>
                                        <div className="work-icon">
                                            <i className="flaticon-car-rental"></i>
                                        </div>
                                        <h5>Eco Hand Wash</h5>
                                        <p>Lorem ipsum dolor sit amet, conse eius
                                            adipiscing elit, sed do eiusm.</p>
                                    </li>
                                    <li>
                                        <div className="work-icon">
                                            <i className="flaticon-car-1"></i>
                                        </div>
                                        <h5>Modern Equipments</h5>
                                        <p>Lorem ipsum dolor sit amet, conse eius
                                            adipiscing elit, sed do eiusm.</p>
                                    </li>
                                    <li>
                                        <div className="work-icon">
                                            <i className="flaticon-valet"></i>
                                        </div>
                                        <h5>Best Result</h5>
                                        <p>Lorem ipsum dolor sit amet, conse eius
                                            adipiscing elit, sed do eiusm.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Workshop area end --> */}

            {/* <!-- Subscribe area start --> */}
            <div className="subscribe-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="single-section">
                                <span>SUBSCRIBE NEWSLETTER</span>
                                <h3>Subscribe Our Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form className="newsletter-form newsletter-form2" data-toggle="validator">
                                <input type="email" placeholder="Enter Your Email Address" id="name" className="form-control" required autocomplete="off" />
                                <button className="deafult-btn1" type="submit">
                                    Subscribe Now
                                </button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Subscribe area end --> */}
        </>
    )
}
