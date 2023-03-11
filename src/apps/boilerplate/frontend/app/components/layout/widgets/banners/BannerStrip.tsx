import React, {useState} from "react";

type BannerStripProps = {
	children: React.ReactNode;
	bg: string;
	element: string;
}

export const BannerStrip: React.FunctionComponent<BannerStripProps> = ({children, ...props}): any | null => {
	
	const {bg, element}:any = props;
	
	return (
		<>
			
			<div className="container hero-banner-strip" style={{minHeight: '350px', marginTop: '50px'}}>
				<div className="hero-banner-bg p-5" style={{backgroundImage: `url('/assets/elements/${bg}')`, backgroundSize: 'cover'}}>
                    <div className="banner-strip-d-flex">
                        <div className="">
                            <img src={`/assets/elements/${element}`} />
                        </div>
                        <div className="">
                            <img src={`/assets/elements/banners/strip-img-art-hearts.svg`} />
                        </div>
                    </div>
				</div>
			</div>
		
		</>
	);
	
};
