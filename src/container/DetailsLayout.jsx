import React from 'react'
import { Outlet } from 'react-router-dom'
import PageTitle from './pagetitle/PageTitle'
import Newsletter from './Newsletter/Newsletter'

export default function DetailsLayout() {
    return (
        <>
            {/* PAGE TITLE */}
            <PageTitle title={"Lights"} link={'/lights'} />
            {/* FURNITURE DESIGN */}
            <section>
                <div className="container">
                    <div className="row mt-n2-6">
                        {/* <!-- service left --> */}
                        <div className="col-lg-4 order-2 order-lg-1 mt-2-6">
                            <div className="pe-lg-3 pe-xl-1-6">
                                <div className="service-details-sidebar">
                                    <aside className="widget widget-nav-menu wow fadeIn" data-wow-delay="200ms">
                                        <div className="section-title side-bar position-relative mb-1-9">
                                            <h6>Our Services</h6>

                                        </div>
                                        <ul className="list-style3">
                                            <li className="active"><a href="furniture-design.html">Furniture Design</a></li>
                                            <li><a href="/2D-3D-layouts.html">2D/3D Layouts</a></li>
                                            <li><a href="/exterior-design.html">Exterior Design</a></li>
                                            <li><a href="/architecture-design.html">Architecture Design</a></li>
                                            <li><a href="/home-decoration.html">Home Decoration</a></li>
                                            <li><a href="/interior-design.html" className="pb-0">Interior Design</a></li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget-address wow fadeIn" data-wow-delay="300ms">
                                        <div className="section-title side-bar position-relative mb-1-6">
                                            <h6>Contact Info</h6>

                                        </div>
                                        <div className="d-flex border-bottom border-color-light-white pb-4 mb-4">
                                            <div className="flex-shrink-0">
                                                <i className="far fa-envelope text-primary fs-4"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-0 text-white">Email Address</h6>
                                                <p className="mb-0 text-extra-light-gray">info@yourdomain.com</p>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom border-color-light-white pb-4 mb-4">
                                            <div className="flex-shrink-0">
                                                <i className="fas fa-mobile-alt text-primary fs-4"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-0 text-white">Phone Number</h6>
                                                <p className="mb-0 text-extra-light-gray">(+44) 123 456 789</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="fas fa-map-marker-alt text-primary fs-4"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-0 text-white">Location</h6>
                                                <p className="mb-0 text-extra-light-gray">Guild Street 512B, UK</p>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside className="widget widget-brochure wow fadeIn" data-wow-delay="400ms">
                                        <div className="section-title side-bar position-relative mb-1-6">
                                            <h6>Brochures</h6>

                                        </div>
                                        <ul>
                                            <li className="border-bottom border-color-light-white pb-3 mb-3">
                                                <a href="#!"><i className="far fa-file-pdf"></i>Download.pdf</a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="far fa-file-alt"></i>Download.txt</a>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="bg-img cover-background primary-overlay widget-info wow fadeIn border-radius-10" data-wow-delay="500ms" data-overlay-dark="9" data-background="/img/bg/bg-03.jpg">
                                        <div className="position-relative z-index-9 text-center py-4 py-md-5">
                                            <i className="fas fa-headset text-white mb-4 display-14"></i>
                                            <h5 className="text-white mb-3">How Can We Help?</h5>
                                            <ul className="text-center list-unstyled mb-4">
                                                <li className="text-white mb-2"><i className="fa fa-phone small text-white me-2"></i><a href="#!" className="text-white">(+44) 123 456 789</a></li>
                                                <li className="text-white"><i className="fa fa-envelope-open small text-white me-2"></i><a href="#!" className="text-white">info@example.com</a></li>
                                            </ul>
                                            <ul className="social-icon-style white">
                                                <li>
                                                    <a href="#!"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#!"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#!"><i className="fab fa-youtube"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end service left --> */}

                        {/* <!-- service right --> */}
                        <Outlet />
                        {/* <!-- end service right --> */}
                    </div>
                </div>
            </section>

            {/* News letter */}
            <Newsletter />
        </>
    )
}
