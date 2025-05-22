import React from 'react'
import PageTitle from '../../container/pagetitle/PageTitle'
import Newsletter from '../../container/Newsletter/Newsletter'

export default function Portfolio() {
    return (
        <>
            {/* PAGE TITLE */}
            <PageTitle title={"Portfolio"} link={'/portfolio'} />

            <section className="position-relative z-index-9">
                <div className="container">
                    <div className="row align-items-center mb-2-9 mb-md-7">
                        <div className="col-lg-6 mx-auto">
                            <div className="section-title center position-relative text-center wow fadeIn" data-wow-delay="200ms">
                                <h6>Portfolio</h6>
                                <h2 className="text-primary">Our Latest Portfolio</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="filtering col-sm-12 text-center wow fadeIn" data-wow-delay="200ms">
                            <span data-filter="*" className="active">All</span>
                            <span data-filter=".mordern">Modern</span>
                            <span data-filter=".decor">Decor</span>
                            <span data-filter=".interior">Interior</span>
                            <span data-filter=".furniture">Furniture</span>
                        </div>
                    </div>
                    <div className="row portfolio-gallery-isotope mt-n1-9">
                        <div className="col-md-6 col-lg-4 mt-1-9 mordern wow fadeIn" data-src="img/portfolio/portfolio-01.jpg" data-sub-html="<h4 class='text-white'>Office Interior #01</h4><p>Modern Design</p>">
                            <div className="portfolio-style-01 position-relative d-block">
                                <div className="portfolio-image">
                                    <div className="overflow-hidden position-relative border-radius-10">
                                        <img src="/img/portfolio/portfolio-01.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-content">
                                        <div>
                                            <span className="text-primary font-weight-500 d-block mb-1 text-uppercase letter-spacing-2">Office Interior</span>
                                            <h3 className="h5 text-dark mb-0"><a className="portfolio-link" href="portfolio-details.html">Modern Design</a></h3>
                                        </div>
                                        <div>
                                            <div className="link-btn"><a href="portfolio-details.html"><i className="ti-search"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-1-9 decor wow fadeIn" data-src="img/portfolio/portfolio-02.jpg" data-sub-html="<h4 class='text-white'>Interior Design #02</h4><p>Decoration</p>">
                            <div className="portfolio-style-01 position-relative d-block">
                                <div className="portfolio-image">
                                    <div className="overflow-hidden position-relative border-radius-10">
                                        <img src="/img/portfolio/portfolio-02.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-content">
                                        <div>
                                            <span className="text-primary font-weight-500 d-block mb-1 text-uppercase letter-spacing-2">Interior Design</span>
                                            <h3 className="h5 text-dark mb-0"><a className="portfolio-link" href="portfolio-details.html">Decoration</a></h3>
                                        </div>
                                        <div>
                                            <div className="link-btn"><a href="portfolio-details.html"><i className="ti-search"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-1-9 furniture wow fadeIn" data-src="img/portfolio/portfolio-03.jpg" data-sub-html="<h4 class='text-white'>Home Interior #03</h4><p>Mordern Furniture</p>">
                            <div className="portfolio-style-01 position-relative d-block">
                                <div className="portfolio-image">
                                    <div className="overflow-hidden position-relative border-radius-10">
                                        <img src="/img/portfolio/portfolio-03.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-content">
                                        <div>
                                            <span className="text-primary font-weight-500 d-block mb-1 text-uppercase letter-spacing-2">Home Interior</span>
                                            <h3 className="h5 text-dark mb-0"><a className="portfolio-link" href="portfolio-details.html">Mordern Furniture</a></h3>
                                        </div>
                                        <div>
                                            <div className="link-btn"><a href="portfolio-details.html"><i className="ti-search"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-1-9 interior wow fadeIn" data-src="img/portfolio/portfolio-04.jpg" data-sub-html="<h4 class='text-white'>Modern Design #04</h4><p>Living Room</p>">
                            <div className="portfolio-style-01 position-relative d-block">
                                <div className="portfolio-image">
                                    <div className="overflow-hidden position-relative border-radius-10">
                                        <img src="/img/portfolio/portfolio-04.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-content">
                                        <div>
                                            <span className="text-primary font-weight-500 d-block mb-1 text-uppercase letter-spacing-2">Modern Design</span>
                                            <h3 className="h5 text-dark mb-0"><a className="portfolio-link" href="portfolio-details.html">Living Room</a></h3>
                                        </div>
                                        <div>
                                            <div className="link-btn"><a href="portfolio-details.html"><i className="ti-search"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-1-9 decor furniture wow fadeIn" data-src="img/portfolio/portfolio-05.jpg" data-sub-html="<h4 class='text-white'>Modern Design #05</h4><p>Prestige Villa</p>">
                            <div className="portfolio-style-01 position-relative d-block">
                                <div className="portfolio-image">
                                    <div className="overflow-hidden position-relative border-radius-10">
                                        <img src="/img/portfolio/portfolio-05.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-content">
                                        <div>
                                            <span className="text-primary font-weight-500 d-block mb-1 text-uppercase letter-spacing-2">Modern Design</span>
                                            <h3 className="h5 text-dark mb-0"><a className="portfolio-link" href="portfolio-details.html">Prestige Villa</a></h3>
                                        </div>
                                        <div>
                                            <div className="link-btn"><a href="portfolio-details.html"><i className="ti-search"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-1-9 interior wow fadeIn" data-src="img/portfolio/portfolio-06.jpg" data-sub-html="<h4 class='text-white'>Modern Design#06</h4><p>Family Apartment</p>">
                            <div className="portfolio-style-01 position-relative d-block">
                                <div className="portfolio-image">
                                    <div className="overflow-hidden position-relative border-radius-10">
                                        <img src="/img/portfolio/portfolio-06.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-content">
                                        <div>
                                            <span className="text-primary font-weight-500 d-block mb-1 text-uppercase letter-spacing-2">Modern Design</span>
                                            <h3 className="h5 text-dark mb-0"><a className="portfolio-link" href="portfolio-details.html">Family Apartment</a></h3>
                                        </div>
                                        <div>
                                            <div className="link-btn"><a href="portfolio-details.html"><i className="ti-search"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News letter */}
            <Newsletter />
        </>
    )
}
