import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);
    return (
        <div className="navbar-area">
            <div className="mobile-responsive-nav">
                <div className="container">
                    <div className="mobile-responsive-menu">
                        <div className="mean-bar">
                            {/* Hamburger button */}
                            <button
                                className="meanmenu-reveal"
                                onClick={toggleMenu}
                                aria-label="Toggle Menu"
                            >
                                <span><span><span></span></span></span>
                            </button>

                            {/* Navigation Menu */}
                            <nav className="mean-nav" style={{ display: menuOpen ? 'block' : 'none' }}>
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/services" className="nav-link" onClick={closeMenu}>Our Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/shop" className="nav-link" onClick={closeMenu}>Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="logo">
                            <a href="index.html">
                                <img src="/images/logo.png" className="main-logo" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="desktop-nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img src="/images/logo.png" className="main-logo" alt="logo" />
                        </Link>

                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/services" className="nav-link">Our Services</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/shop" className="nav-link">Shop</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>

                            <div className="others-options">
                                <ul>
                                    <li>
                                        <a href="cart.html" className="icon">
                                            <img src="/images/svg/cart.svg" alt="image" />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                01
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="others-options2 d-flex align-items-center">
                                            <div className="option-item">
                                                <i className="search-btn bx bx-search"></i>
                                                <i className="close-btn bx bx-x"></i>
                                                <div className="search-overlay search-popup">
                                                    <div class='search-box'>
                                                        <form className="searchus-form">
                                                            <input className="search-input" placeholder="Search..." type="text" />

                                                            <button className="search-button" type="submit">
                                                                <i className="bx bx-search"></i>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="contact-us.html" className="deafult-btn1"><span>Book Now</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="others-option-for-responsive">
                <div className="container">
                    <div className="dot-menu">
                        <div className="inner">
                            <div className="circle circle-one"></div>
                            <div className="circle circle-two"></div>
                            <div className="circle circle-three"></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="option-inner">
                            <div className="others-options d-flex">
                                <ul>
                                    <li>
                                        <a href="cart.html" className="icon">
                                            <img src="/images/svg/cart.svg" alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <div className="others-options2 d-flex align-items-center">
                                            <div className="option-item">
                                                <i className="search-btn bx bx-search"></i>
                                                <i className="close-btn bx bx-x"></i>
                                                <div className="search-overlay search-popup">
                                                    <div class='search-box'>
                                                        <form className="searchus-form">
                                                            <input className="search-input" placeholder="Search..." type="text" />

                                                            <button className="search-button" type="submit">
                                                                <i className="bx bx-search"></i>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="contact-us.html" className="deafult-btn1"><span>Book Now</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}