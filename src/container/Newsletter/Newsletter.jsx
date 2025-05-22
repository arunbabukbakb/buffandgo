import React from 'react'

export default function Newsletter() {
  return (
    <div className="newsletter-area">
            <div className="container">
                <div className="newsletter-inner ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="newletter-content">
                                <span>SUBSCRIBE NEWSLETTER</span>
                                <h3>Subscribe to our newsletter</h3>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form className="newsletter-form" data-toggle="validator">
                                <input type="email" placeholder="Enter Your Email Address" id="name3" className="form-control" required autocomplete="off" />
                                <button  className="deafult-btn2" type="submit">
                                    Subscribe Now
                                </button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
