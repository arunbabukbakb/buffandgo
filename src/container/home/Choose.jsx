import React from 'react'

export default function Choose({ homeClass }) {
    return (
        <div className={`choose-area ptb-100 ${homeClass ?? ''}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <div className="single-section">
                                <span>WHY CHOOSE US</span>
                                <h3>We Have a Car Workshop <br /> Near You</h3>
                            </div>
                            <p>There are many variations of passages of available but the majority have
                                suffered alteration in some form, by injected.</p>
                            <ul>
                                <li>
                                    <img src="/images/svg/about-icon1.svg" alt="image" />
                                    <h6>Flexible Solutions</h6>
                                    <p>There are many variations of passages of available but the majority
                                        suffered alteration in some form, by injected.</p>
                                </li>
                                <li>
                                    <img src="/images/svg/about-icon1.svg" alt="image" />
                                    <h6>24/7 Unlimited Support</h6>
                                    <p>There are many variations of passages of available but the majority
                                        suffered alteration in some form, by injected.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="before-after-area">
                            <div className="before-after-content ml-15">
                                <div className="ba-slider">

                                    <img src="/images/choose/choose2.png" alt="after" />
                                    <div className="resize">
                                        <img src="/images/choose/choose1.png" alt="before" />
                                    </div>
                                    <span className="handle"></span>
                                </div>
                            </div>
                            <div className="before-after-shape">
                                <img src="/images/choose/before.png" className="before-shape" alt="image" />
                                <img src="/images/choose/after.png" className="after-shape" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
