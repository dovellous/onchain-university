import React, {lazy} from "react";
import PageContentWrapper from "../../../layout/wrapper/PageContentWrapper";

const DashboardPage = lazy(() => import("./DashboardPage"));

type PageProps = {
  children?: React.ReactNode;
}

const DashboardWrapper:React.FunctionComponent<PageProps> = ({ children, ...props}) : any  => {

  return (
      <>
          <PageContentWrapper pageTitle={"Dashboard"} breadCrumbs={[]}>
              <DashboardPage  />
          </PageContentWrapper>
      </>
  );
  
}

export default DashboardWrapper;