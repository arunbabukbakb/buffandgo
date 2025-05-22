import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    loop: true,
    margin: 50,
    nav: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,           // 🔸 Enables autoplay
    autoplayTimeout: 4000,      // 🔸 3 seconds per slide
    autoplayHoverPause: true,   // 🔸 Pause on hover
    items: 3,
    center: true, // 🔸 Centers the active slide
    responsive: {
        0: {
            items: 1, // Mobile devices
        },
        600: {
            items: 2, // Tablets
        },
        1000: {
            items: 3, // Desktops
        }
    }
};

export default function Services({ homeClass }) {
    return (
        <div className={`service-area ptb-100 ${homeClass ?? ''}`}>
            <div className="container">
                <div className="section-title">
                    <span>OUR SERVICES</span>
                    <h3>A Variety of Wash Options <br /> for Your Car</h3>
                </div>
                <OwlCarousel className='service-slider owl-carousel owl-theme' {...options}>
                    <div className="service-card">
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
                    <div className="service-card">
                        <div className="service-image">
                            <a href="service-details.html"><img src="/images/service/service2.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Interior Washing</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <a href="service-details.html"><img src="/images/service/service3.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Vacuum Cleaning</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                    <div className="service-card">
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
                    <div className="service-card">
                        <div className="service-image">
                            <a href="service-details.html"><img src="/images/service/service2.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Interior Washing</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <a href="service-details.html"><img src="/images/service/service3.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Vacuum Cleaning</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                    <div className="service-card">
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
                    <div className="service-card">
                        <div className="service-image">
                            <a href="service-details.html"><img src="/images/service/service2.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Interior Washing</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <a href="service-details.html"><img src="/images/service/service3.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Vacuum Cleaning</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                    <div className="service-card">
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
                    <div className="service-card">
                        <div className="service-image">
                            <a href="services.html"><img src="/images/service/service2.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Exterior Washing</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <a href="services.html"><img src="/images/service/service3.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Vacuum Cleaning</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <a href="services.html"><img src="/images/service/service2.jpg" alt="image" /></a>
                        </div>
                        <div className="service-content">
                            <h5><a href="service-details.html">Interior Washing</a></h5>
                            <p>Lorem ipsum dolor sit amet, conse eiusdo
                                adipiscing elit, sed do eiusmod tempor inde consectetur adipiscing eli </p>
                        </div>
                        <a href="service-details.html" className="read">Read More</a>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}
