import React, {useState} from "react";

export const MenuSlider:React.FunctionComponent = () : any | null => {
    
    const  [slides, setSlides] = useState<any>([1]);

  return (
    <>
    
        <section className="hero-slide-wrapper techex-landing-page">
            
            <div className="hero-slider-active-2 owl-carousel owl-theme">
                
                {slides.map((slide:any, slideIndex:number)=>(
                
                <div className="single-slide bg-cover" key={slideIndex}
                     style={{backgroundImage: "url('/assets/elements/banners/banner-home-slider-1.png')" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-contents text-center">
                                    <h1 data-animation="fadeInUp" data-delay="0.4s">
                                        <img src="/assets/elements/banners/strip-btn-craving.svg" className={' w-100 banner-slider-img'} alt="Mambo's Chicken" style={{width: '100% !important'}}/>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                ))}
                
            </div>
        </section>

    </>
  );
  
};
