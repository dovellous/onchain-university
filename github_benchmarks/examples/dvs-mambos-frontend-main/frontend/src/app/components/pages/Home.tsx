import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/provider/AuthProvider";
import {HomePageSlider} from "../layout/widgets/sliders/HomePageSlider";


type PageProps = {
  children?: React.ReactNode;
}

const Home:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
  
  const { user }: any = useAuth();
  
  return (
      <>
    
          <HomePageSlider />
    
          <div className="content-area">

        
              <section className="our-service-provide techex-landing-page">
                  <div className="container">

                      <div className="row text-center">
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up">
                              <div className="single-blog-card style-3 content pt-5 pb-5 pl-3 pr-3">
                                  <h3>
                                      <img src={'/assets/elements/banners/home-3up-order.svg'} style={{height: '60px', marginBottom: '20px'}}/>
                                  </h3>
                                  <p>Order ahead and get your meal to-go from the restuarant.</p>
                              </div>
                          </div>

                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up">
                              <div className="single-blog-card style-3 content pt-5 pb-5 pl-3 pr-3">
                                  <h3>
                                      <img src={'/assets/elements/banners/home-3up-delivery.svg'} style={{height: '60px', marginBottom: '20px'}}/>
                                  </h3>
                                  <p>Craving a taste of Royalty? We deliver for free in the CBD. Ts & Cs apply.</p>
                              </div>
                          </div>

                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up">
                              <div className="single-blog-card style-3 content pt-5 pb-5 pl-3 pr-3">
                                  <h3>
                                      <img src={'/assets/elements/banners/home-3up-feast.svg'} style={{height: '60px', marginBottom: '20px'}}/>
                                  </h3>
                                  <p>Na Enjoyment. Visit us, order your favourate meal, grab a table and Enjoy.</p>
                              </div>
                          </div>

                      </div>
                  </div>
              </section>

              <section className="blog-section techex-landing-page"

                style={{
                    backgroundImage: "url('/assets/elements/banners/bg-body.svg')",
                    backgroundSize: 'cover',
                    backgroundColor: '#a100ff',
                    backgroundBlendMode: "difference",
                    backgroundPosition: "center"
                }}
              >
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="section-title text-center">
                                  <h1 data-aos="fade-up" data-aos-delay="100">
                                      <img src={`assets/elements/banners/txt-home-favourites.svg`} />
                                  </h1>
                              </div>
                          </div>
                      </div>
                
                      <div className="row">
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up">
                              <div className="single-blog-card style-3">
                                  <div className="blog-featured-thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="post-top-meta d-flex flex-wrap align-items-center">
                                          <div className="post-date">
                                              <a href="#"><i className="fal fa-calendar-alt"></i>18 Jan 2022</a>
                                          </div>
                                          <div className="post-comment">
                                              <a href="#"><i className="icon-message"></i>02 Comments</a>
                                          </div>
                                      </div>
                                      <h3><a href="news-details.html">Web Development</a></h3>
                                      <div className="excerpt">
                                          <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      </div>
                                      <div className="btn-link-share d-flex justify-content-between align-items-center">
                                          <a href="news-details.html">read more <i
                                              className="icon-arrow-right-1"></i></a>
                                          <a href="#"><i className="fal fa-share-alt"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
                              <div className="single-blog-card style-3">
                                  <div className="blog-featured-thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="post-top-meta d-flex flex-wrap align-items-center">
                                          <div className="post-date">
                                              <a href="#"><i className="fal fa-calendar-alt"></i>18 Jan 2022</a>
                                          </div>
                                          <div className="post-comment">
                                              <a href="#"><i className="icon-message"></i>02 Comments</a>
                                          </div>
                                      </div>
                                      <h3><a href="news-details.html">Web Development</a></h3>
                                      <div className="excerpt">
                                          <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      </div>
                                      <div className="btn-link-share d-flex justify-content-between align-items-center">
                                          <a href="news-details.html">read more <i
                                              className="icon-arrow-right-1"></i></a>
                                          <a href="#"><i className="fal fa-share-alt"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="150">
                              <div className="single-blog-card style-3">
                                  <div className="blog-featured-thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="post-top-meta d-flex flex-wrap align-items-center">
                                          <div className="post-date">
                                              <a href="#"><i className="fal fa-calendar-alt"></i>18 Jan 2022</a>
                                          </div>
                                          <div className="post-comment">
                                              <a href="#"><i className="icon-message"></i>02 Comments</a>
                                          </div>
                                      </div>
                                      <h3><a href="news-details.html">Web Development</a></h3>
                                      <div className="excerpt">
                                          <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      </div>
                                      <div className="btn-link-share d-flex justify-content-between align-items-center">
                                          <a href="news-details.html">read more <i
                                              className="icon-arrow-right-1"></i></a>
                                          <a href="#"><i className="fal fa-share-alt"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
          {/*    content-area    */}

          <section className="cta-banner style-3">
              <div className="container-fluid bg-cover section-bg"
                   style={{background: "none", backgroundColor: '#efefef', padding: 0}}>

                  <img src={`assets/elements/banners/banner-home-footer.png`} className={'w-100'} style={{marginTop: '-5px'}} />

              </div>
          </section>
    
          <section className="cta-banner style-3" style={{backgroundColor: '#efefef'}}>
              <div className="container-fluid bg-cover section-bg"
                   style={{backgroundImage: "url('assets/img/cta_bg1.png')"}}>
                  <div className="cta-content">
                      <div className="row align-items-center">
                          <div className="col-xl-6 col-12">
                              <h1 className={'text-black'}>Stay Informed</h1>
                              <h3 className={'text-muted mt-3'}>Sign me up to Mambo’s Chicken emails for access to exclusive events and flaming Competitions!</h3>
                              <div className="banner-strip-d-flex  w-100 mt-5">
                                  <div className="single-footer-wid site_footer_widget newsletter_widget w-80" >
                                      <div className="newsletter_box">
                                          <form action="#" className="mt-0">
                                              <input type="email" placeholder="Email address" />
                                              <button className="submit-btn" type="submit"><i
                                                  className="fal fa-envelope-open-text"></i></button>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-6 col-12" style={{minHeight: '255px'}}>
                              <h1 className={'text-black'}>Na - Enjoyment?</h1>
                              <h3 className={'text-muted mt-3'}>Download our app for a taste of royalty delivered right to you doorstep.</h3>
                              <div className="banner-strip-d-flex  w-100 mt-5" style={{maxWidth: '300px'}}>
                                  <a href="contact.html" className="download-app android mr-30 ">
                                      &nbsp;
                                  </a>
                                  <a href="services-details.html" className="download-app ios">
                                      &nbsp;
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </>
  );
  
};

export default Home;