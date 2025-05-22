import React from "react";
import {
    Banner, AboutUs, Services, Feautures, Video,
    Choose, Testimonial, Blog

} from "../../container/home";
import Newsletter from "../../container/Newsletter/Newsletter";


export default function Home() {
    return (
        <>
            <Banner />
            <Feautures />
            <AboutUs />
            <Services />
            <Video />
            <Choose />
            <Newsletter />
            <Testimonial />
            <Blog />
        </>
    )
}