import React, { useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';
import InnerFooter from './footer/InnerFooter';

export default function HomeLayout() {
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300); // Show after scrolling 300px
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* <!-- Preloader --> */}
            {/* <div className="preloader-area">
                <div id="overlayer"></div>
                <span className="loader">
                    <span className="loader-inner"></span>
                </span>
            </div> */}
            {/* <!-- End Preloader --> */}
            {/* HEADER */}
            <Header />
            {/* Routing to other pages */}
            <Outlet />
            {/* Footer */}
            {/* Conditional Footer */}
            {location.pathname === '/' ? <Footer /> : <InnerFooter />}

            {/* <!-- go to top start--> */}
            <div className="go-top" onClick={scrollToTop}><i class='bx bx-chevron-up'></i></div>
            {/* <!-- go to top area end--> */}
        </>

    )
}
