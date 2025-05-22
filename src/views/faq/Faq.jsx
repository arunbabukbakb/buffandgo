import React from 'react'
import PageTitle from '../../container/pagetitle/PageTitle'
import Newsletter from '../../container/Newsletter/Newsletter'

export default function Faq() {
    return (
        <>
            {/* PAGE TITLE */}
            <PageTitle title={"FAQ"} link={'/faq'} />

            {/* FAQ */}
            <section className="faq-block">
                <div className="container">
                    <div className="row align-items-center mb-2-9 mb-md-7">
                        <div className="col-lg-6 mx-auto">
                            <div className="section-title center position-relative text-center z-index-9 wow fadeIn" data-wow-delay="200ms">
                                <h6>FAQ</h6>
                                <h2 className="text-primary">Frequently Asked Questions From Support</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-n1-9">

                        <div className="col-lg-6 col-xl-5 mt-1-9">
                            <div className="text-center position-relative z-index-9 wow fadeIn" data-wow-delay="400ms">
                                <img src="/img/content/about-03.jpg" alt="..." className="border-radius-10" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7 mt-1-9">
                            <div className="position-relative z-index-9 ps-lg-1-9 ps-xl-7 wow fadeIn" data-wow-delay="600ms">
                                <div className="accordion" id="accordion">
                                    <div className="card">
                                        <h2 className="card-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">01. Can I order a specific color for my room ?</button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                Exterior consultancy company that brings sensitivity to the layout pinnacle restaurants, hotels, offices & houses across the world. We have been providing advice on the interior layout, generating 2D or 3D interior design plans & customer service.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <h2 className="card-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">02. What is your service area ?</button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                Exterior consultancy company that brings sensitivity to the layout pinnacle restaurants, hotels, offices & houses across the world. We have been providing advice on the interior layout, generating 2D or 3D interior design plans & customer service.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <h2 className="card-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">03. What is 3D rendering ?</button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                Exterior consultancy company that brings sensitivity to the layout pinnacle restaurants, hotels, offices & houses across the world. We have been providing advice on the interior layout, generating 2D or 3D interior design plans & customer service.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <h2 className="card-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">04. Are there any discounts included ?</button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                Exterior consultancy company that brings sensitivity to the layout pinnacle restaurants, hotels, offices & houses across the world. We have been providing advice on the interior layout, generating 2D or 3D interior design plans & customer service.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <h2 className="card-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">05. What kind of interior designer you have?</button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                Exterior consultancy company that brings sensitivity to the layout pinnacle restaurants, hotels, offices & houses across the world. We have been providing advice on the interior layout, generating 2D or 3D interior design plans & customer service.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HAVE A QUESTION */}
            <section>
                <div className="container">
                    <div className="row align-items-center mb-2-9 mb-md-7">
                        <div className="col-lg-6 mx-auto">
                            <div className="section-title center position-relative text-center wow fadeIn" data-wow-delay="200ms">
                                <h6>Get In Touch</h6>
                                <h2 className="text-primary">Have A Project In Mind ?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center g-0">
                        <div className="col-lg-10 wow fadeIn" data-wow-delay="400ms">
                            <div className="p-1-9 p-sm-2-5 p-lg-6 bg-white shadow border-radius-10">
                                <h3 className="h4 mb-4">Ask Your Question</h3>
                                <form className="quform" action="/quform/contact.php" method="post" enctype="multipart/form-data" onclick="">
                                    <div className="quform-elements">
                                        <div className="row">

                                            {/* <!-- Begin Text input element --> */}
                                            <div className="col-md-6">
                                                <div className="quform-element form-group">
                                                    <div className="quform-input">
                                                        <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Text input element --> */}

                                            {/* <!-- Begin Text input element --> */}
                                            <div className="col-md-6">
                                                <div className="quform-element form-group">
                                                    <div className="quform-input">
                                                        <input className="form-control" id="email" type="text" name="email" placeholder="Your email here" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Text input element --> */}

                                            {/* <!-- Begin Text input element --> */}
                                            <div className="col-md-6">
                                                <div className="quform-element form-group quform-select-replaced">
                                                    <div className="quform-input">
                                                        <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Text input element --> */}

                                            {/* <!-- Begin Text input element --> */}
                                            <div className="col-md-6">
                                                <div className="quform-element form-group">
                                                    <div className="quform-input">
                                                        <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Text input element --> */}

                                            {/* <!-- Begin Textarea element --> */}
                                            <div className="col-md-12">
                                                <div className="quform-element form-group">
                                                    <div className="quform-input">
                                                        <textarea className="form-control" id="message" name="message" rows="3" placeholder="Tell us a few words"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Textarea element --> */}

                                            {/* <!-- Begin Captcha element --> */}
                                            <div className="col-md-12">
                                                <div className="quform-element">
                                                    <div className="form-group">
                                                        <div className="quform-input">
                                                            <input className="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="quform-captcha">
                                                            <div className="quform-captcha-inner">
                                                                <img src="/quform/images/captcha/courier-new-light.png" alt="..." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Captcha element --> */}

                                            {/* <!-- Begin Submit button --> */}
                                            <div className="col-md-12">
                                                <div className="quform-submit-inner">
                                                    <button className="butn md" type="submit">Send Message</button>
                                                </div>
                                                <div className="quform-loading-wrap text-start"><span className="quform-loading"></span></div>
                                            </div>
                                            {/* <!-- End Submit button --> */}

                                        </div>
                                    </div>
                                </form>
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
