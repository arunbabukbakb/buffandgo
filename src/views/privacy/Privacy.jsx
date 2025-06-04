import React from 'react'
import PageTitle from '../../container/pagetitle/PageTitle'
import { Link } from 'react-router-dom'

export default function Privacy() {
    return (
        <>
            {/* PAGE TITLE */}
            <PageTitle title={"Privacy & Policy"} link={'/privacy'} />


            {/* <!-- Question area start --> */}
            <div className="question-area py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h2 className="mb-4">Privacy Policy</h2>

                            <p><strong>Effective Date:</strong> June 4, 2025</p>

                            <p>Buff & Go is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.</p>

                            <h5 className="mt-4">1. Information We Collect</h5>
                            <p>We may collect personal information such as your name, contact number, email address, service location, and vehicle details when you book our services or contact us.</p>

                            <h5 className="mt-4">2. How We Use Your Information</h5>
                            <p>Your information is used to provide services, confirm bookings, send updates, respond to inquiries, and improve our website and offerings.</p>

                            <h5 className="mt-4">3. Sharing of Information</h5>
                            <p>We do not sell or rent your personal information. We may share data with trusted partners who help us operate our business, under strict confidentiality agreements.</p>

                            <h5 className="mt-4">4. Data Security</h5>
                            <p>We use appropriate security measures to protect your information from unauthorized access, disclosure, or alteration.</p>

                            <h5 className="mt-4">5. Cookies & Tracking</h5>
                            <p>Our website may use cookies to enhance user experience and collect analytics. You can disable cookies through your browser settings if desired.</p>

                            <h5 className="mt-4">6. Your Rights</h5>
                            <p>You have the right to request access to, correction, or deletion of your personal data at any time. Please contact us to process your request.</p>

                            <h5 className="mt-4">7. Third-Party Links</h5>
                            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>

                            <h5 className="mt-4">8. Updates to This Policy</h5>
                            <p>We may update this Privacy Policy occasionally. Any changes will be posted on this page with a revised effective date.</p>

                            <h5 className="mt-4">9. Contact Us</h5>
                            <p>If you have any questions or concerns about our Privacy Policy, please contact us:</p>
                            <ul>
                                <li><strong>Email:</strong> +919567498520 | +919526162310</li>
                                <li><strong>Phone:</strong> +919567498520 | +919526162310</li>
                                <li><strong>Website:</strong> <Link to="/">www.buffandgo.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Question area end --> */}
        </>
    )
}
