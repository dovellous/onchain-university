import React from "react";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../../auth/provider/AuthProvider";

type FooterProps = {
    children: React.ReactNode;
}

export const Footer: React.FunctionComponent<FooterProps> = ({children, ...props}): any | null => {

    const {user}: any = useAuth();

    return (
        <>

            <footer className="footer-4 footer-wrap">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3 col-12 pr-xl-4">
                                <div className="single-footer-wid site_footer_widget">
                                    <a href="index-1.html">
                                        <img src="/assets/elements/logos/logo-full-color.svg" alt="" height={64}/>
                                    </a>
                                    <p className="mt-4">
                                        Mambo’s Chicken was opened in Harare, Zimbabwe in 2018. It is a true taste of
                                        Fried and Grill Chicken, that’s because Mambo’s is a family business.
                                    </p>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h4>Company</h4>
                                    </div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/menu">Our Menu</a></li>
                                        <li><a href="/promotions">Promotions</a></li>
                                        <li><a href="/experience">Mambo's Experience</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h4>Useful Links</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#.">Online Ordering Platform</a></li>
                                        <li><a href="/downloads/menu">Download Menu</a></li>
                                        <li><a href="/downloads/android">Download For Android</a></li>
                                        <li><a href="/downloads/ios">Download For iOS</a></li>
                                        <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid contact_widget_2">
                                    <div className="wid-title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="contact-us">
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="contact-info">
                                                <p>17 Park Street, CBD, Harare</p>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="contact-info">
                                                <p>+263 (71) 921 6187 </p>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="fas fa-envelope-open-text"></i>
                                            </div>
                                            <div className="contact-info">
                                                <p>delivery@mamboschicken.co.zw</p>
                                            </div>
                                        </div>
                                        <div className="social-link mt-30">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container text-center">
                        <div className="footer-bottom-content">
                            © {new Date().getFullYear()} <a href="/">Mambo's Chicken</a>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );

};
