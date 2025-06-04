import React from 'react'
import PageTitle from '../../container/pagetitle/PageTitle'
import { Link } from 'react-router-dom'

export default function Terms() {
    return (
        <>
            {/* PAGE TITLE */}
            <PageTitle title={"Terms & Conditions"} link={'/terms'} />


            {/* <!-- Question area start --> */}
            <div className="question-area py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h2 className="mb-4">Terms & Conditions</h2>

                            <p><strong>Effective Date:</strong> June 4, 2025</p>

                            <p>Welcome to <strong>Buff & Go</strong>. By using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>

                            <h5 className="mt-4">1. Services Offered</h5>
                            <p>We provide doorstep car wash, vehicle detailing, home and office cleaning services. Availability may vary based on location and time.</p>

                            <h5 className="mt-4">2. Appointments & Scheduling</h5>
                            <p>Appointments must be scheduled in advance. You may reschedule or cancel with at least 2 hours' notice. We reserve the right to reschedule or cancel due to weather or operational issues.</p>

                            <h5 className="mt-4">3. Payments</h5>
                            <p>All payments must be made either online or upon service completion. Prices are inclusive of applicable taxes unless stated otherwise.</p>

                            <h5 className="mt-4">4. Cancellations & Refunds</h5>
                            <p>Full refunds are available for cancellations made at least 2 hours before the appointment. Refunds for unsatisfactory service must be requested within 24 hours and are subject to review.</p>

                            <h5 className="mt-4">5. Customer Responsibilities</h5>
                            <p>Please ensure access to the cleaning area and remove personal items. Inform us of any special requirements or concerns before the service begins.</p>

                            <h5 className="mt-4">6. Liability</h5>
                            <p>We are not liable for pre-existing damage or lost personal belongings. All services are performed with professional care, but at your own risk.</p>

                            <h5 className="mt-4">7. Website Usage</h5>
                            <p>You agree not to misuse our website. Any attempts to disrupt service or security will result in termination of access.</p>

                            <h5 className="mt-4">8. Privacy Policy</h5>
                            <p>Your personal data is handled according to our <a href="privacy-policy.html">Privacy Policy</a>. We do not share your information with third parties without your consent.</p>

                            <h5 className="mt-4">9. Changes to Terms</h5>
                            <p>We may update these terms at any time. Continued use of our services implies your acceptance of the revised terms.</p>

                            <h5 className="mt-4">10. Contact Us</h5>
                            <p>If you have any questions, contact us at:</p>
                            <ul>
                                <li><strong>Email:</strong> buffandgoautocare@gmail.com</li>
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
