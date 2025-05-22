import React from 'react'
import { Link } from "react-router-dom";

export default function PageTitle(props) {
    const { title, link } = props;
    return (
        <div className="inner-banner-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 p-0">
                        <div className="inner-banner-contrnt">
                            <h2>{title}</h2>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    {title}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="inner-image-area">
                            <img src="/images/banner/inner-banner-shape.png" className="inner-image" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="hero-shape">
                    <img src="/images/shapes/banner-shaoe1.png" className="hero-s-7" alt="shape" />
                    <img src="/images/shapes/banner-shaoe2.png" className="hero-s-8" alt="shape" />
                    <img src="/images/shapes/banner-shaoe3.png" className="hero-s-9" alt="shape" />
                    <img src="/images/shapes/banner-shaoe5.png" className="hero-s-10" alt="shape" />
                    <img src="/images/shapes/banner-shaoe2.png" className="hero-s-11" alt="shape" />
                </div>
            </div>
        </div>
    )
}
