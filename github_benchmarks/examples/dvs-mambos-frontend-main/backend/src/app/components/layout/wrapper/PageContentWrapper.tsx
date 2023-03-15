import React from "react";

type PageProps = {
  pageTitle: string;
  breadCrumbs: any;
  children?: React.ReactNode;
}

const PageContentWrapper:React.FunctionComponent<PageProps> = ({ children, ...props}) : any => {

    const {breadCrumbs, pageTitle} = props;

    return (
      <>
          {/*  ==============================================================  */}
          {/*  Start right Content here  */}
          {/*  ==============================================================  */}
          <div className="main-content">
              <div className="page-content">
                  <div className="container-fluid">
                      {/* start page title */}
                      <div className="row">
                          <div className="col-12">
                              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                  <h4 className="mb-sm-0">{pageTitle}</h4>
                                  {breadCrumbs.length > 0 && (
                                  <div className="page-title-right">
                                      <ol className="breadcrumb m-0">
                                          {breadCrumbs.map((breadCrumb:any, breadCrumbIndex:number)=>(
                                              <>
                                                  <li className={`breadcrumb-item ${(breadCrumbIndex+1) === breadCrumbs.length}`}>
                                                  {(breadCrumbIndex+1) === breadCrumbs.length ? (
                                                      breadCrumb.title
                                                  ):(
                                                      <a href="#.">
                                                          {breadCrumb.title}
                                                      </a>
                                                  )}
                                                  </li>
                                              </>
                                          ))}
                                      </ol>
                                  </div>
                                  )}
                              </div>
                          </div>
                      </div>
                      {/* end page title */}
                      {children}
                  </div>
                  {/*  container-fluid  */}
              </div>
              {/*  End Page-content  */}
          </div>
          {/*  end main content */}
      </>
  );
};

export default PageContentWrapper;