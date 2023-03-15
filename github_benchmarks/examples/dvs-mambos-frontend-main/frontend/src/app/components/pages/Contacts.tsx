import React from "react";
import {useSelector} from "react-redux";
import {BannerStrip} from "../layout/widgets/banners/BannerStrip";
import {MenuFoodItems} from "../layout/widgets/menu/MenuFoodItems";
import {MenuNavBar} from "../layout/widgets/menu/MenuNavBar";
import {MenuSlider} from "../layout/widgets/sliders/MenuSlider";

type PageProps = {
  children?: React.ReactNode;
}

const Contacts:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
    
    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);
    
  return (
      <>

          <section className="contact-page-wrap section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-contact-card card1">
                              <div className="top-part">
                                  <div className="icon">
                                      <i className="fal fa-envelope"></i>
                                  </div>
                                  <div className="title">
                                      <h4>Email Address</h4>
                                      <span>Sent mail asap anytime</span>
                                  </div>
                              </div>
                              <div className="bottom-part">
                                  <div className="info">
                                      <p>info@mamboschicken.co.zw</p>
                                      <p>delivery@mamboschicken.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-contact-card card2">
                              <div className="top-part">
                                  <div className="icon">
                                      <i className="fal fa-phone"></i>
                                  </div>
                                  <div className="title">
                                      <h4>Phone Number</h4>
                                      <span>call us asap anytime</span>
                                  </div>
                              </div>
                              <div className="bottom-part">
                                  <div className="info">
                                      <p>+263 (242) 757211</p>
                                      <p>+263 (71) 921 6187</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-contact-card card3">
                              <div className="top-part">
                                  <div className="icon">
                                      <i className="fal fa-map-marker-alt"></i>
                                  </div>
                                  <div className="title">
                                      <h4>Restaurant Address</h4>
                                      <span>Come and dine with us</span>
                                  </div>
                              </div>
                              <div className="bottom-part">
                                  <div className="info">
                                      <p>No. 17 Park Street / Kwame Nkrumah Ave, Harare, Zimbabwe</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="row section-padding pb-0">
                      <div className="col-12 text-center mb-20">
                          <div className="section-title">
                              <p>send us message</p>
                              <h1>Don’t Hesited To Contact Us <br /> Say a Hello Message</h1>
                          </div>
                      </div>

                      <div className="col-12 col-lg-12">
                          <div className="contact-form">
                              <form action="#" className="row conact-form">
                                  <div className="col-md-6 col-12">
                                      <div className="single-personal-info">
                                          <label htmlFor="fname">Full Name</label>
                                          <input type="text" id="fname" placeholder="Enter Name" />
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-12">
                                      <div className="single-personal-info">
                                          <label htmlFor="email">Email Address</label>
                                          <input type="email" id="email" placeholder="Enter Email Address" />
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-12">
                                      <div className="single-personal-info">
                                          <label htmlFor="phone">Phone Number</label>
                                          <input type="text" id="phone" placeholder="Enter Number" />
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-12">
                                      <div className="single-personal-info">
                                          <label htmlFor="subject">Subject</label>
                                          <input type="text" id="subject" placeholder="Enter Subject" />
                                      </div>
                                  </div>
                                  <div className="col-md-12 col-12">
                                      <div className="single-personal-info">
                                          <label htmlFor="subject">Enter Message</label>
                                          <textarea placeholder="Enter message"></textarea>
                                      </div>
                                  </div>
                                  <div className="col-md-12 col-12 text-center">
                                      <button type="submit" className="theme-btn">send message <i
                                          className="fas fa-arrow-right"></i></button>
                                  </div>
                              </form>
                          </div>
                      </div>

                  </div>

                  <div className="row mt-5">
                      <div className="col-12 col-lg-12">
                          <div className="contact-map-wrap">
                              <div id="map">
                                  <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5457.875323165521!2d144.90402300269133!3d-37.792722838344716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612018663424!5m2!1sen!2sbd"
                                      frameBorder="0" style={{border:"0", width:"100%"}} allowFullScreen={true}
                                      aria-hidden="false" tabIndex={0} />
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </section>

      </>
  );
  
};

export default Contacts;