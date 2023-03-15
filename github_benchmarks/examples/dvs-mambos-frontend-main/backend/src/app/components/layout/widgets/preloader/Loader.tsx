import React from "react";

export const Loader: React.FunctionComponent = (): any | null => {
	
	return (
		<>
			<div id="preloader" className="preloader">
				<div className="animation-preloader">
					<div className="spinner">
					</div>
					<div className="txt-loading">
                    <span className="letters-loading">
                        <img src="/assets/elements/logos/logo-full-color.svg" alt="logo"
                             style={{width: '120px', marginTop: '-385px !important'}}/>
                    </span>
					</div>
				</div>
				<div className="loader">
					<div className="row">
						<div className="col-3 loader-section section-left">
							<div className="bg"/>
						</div>
						<div className="col-3 loader-section section-left">
							<div className="bg"/>
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg"/>
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg"/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
