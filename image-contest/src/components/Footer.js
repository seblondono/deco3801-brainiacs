import React from 'react';

const Footer = (props) => {
    return (
        <div id="site-footer" className="site-footer">
            <div className="site-footer__content">
                <div className="row">
                <div className="columns large-9 medium-8">
                    <span className="footer__copyright">&copy; The University of Queensland</span>

                    <div className="footer__contact">
                    Enquiries: <a href="tel:+61733651111" className="footer__link footer__enquiries-phone">+61 7 3365 1111</a>
                    &nbsp; | &nbsp; <a href="https://uq.edu.au/contacts" className="footer__link footer__contacts-link">Contact directory</a>
                    </div>
                    <div className="footer__meta">
                    <abbr title="Australian Business Number">ABN</abbr>: 63 942 912 684 &nbsp; | &nbsp;
                    <abbr title="Commonwealth Register of Institutions and Courses for Overseas Students">CRICOS </abbr>
                    Provider No: <a className="footer__link cricos__link" href="https://www.uq.edu.au/about/cricos-link" rel="external">00025B</a>
                    </div>
                </div>
                <div className="columns large-3 medium-4">
                    <div className="site-footer__emergency-contact">
                    <strong className="site-footer__sub-title">Emergency</strong><br/>
                    Phone: <a href="tel:+61733653333" className="footer__link footer__emergency-phone">3365 3333</a>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="site-footer__footer">
                    <div className="columns large-9 medium-8">
                    <a href="https://www.uq.edu.au/terms-of-use/" rel="external" className="footer__link footer__terms-link">Privacy &amp; Terms of use</a> &nbsp; | &nbsp;
                    <a href="https://its.uq.edu.au/feedback?r=https%3A//qbi.uq.edu.au/" rel="nofollow" className="footer__link footer__feedback-link">Feedback</a>
                            </div>
                    <div className="columns large-3 medium-4">
                                    <a href="/user?destination=home" className="login__link" rel="nofollow">Login</a>                  </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;