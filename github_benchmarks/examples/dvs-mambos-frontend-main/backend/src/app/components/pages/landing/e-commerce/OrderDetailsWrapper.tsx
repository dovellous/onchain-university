import React, {lazy} from "react";
import PageContentWrapper from "../../../layout/wrapper/PageContentWrapper";

const OrderDetailsPage = lazy(() => import("./OrderDetailsPage"));

type PageProps = {
  children?: React.ReactNode;
}

const OrderDetailsWrapper:React.FunctionComponent<PageProps> = ({ children, ...props}) : any  => {

  return (
      <>
          <PageContentWrapper pageTitle={"Orders Details"} breadCrumbs={[]}>
              <OrderDetailsPage  />
          </PageContentWrapper>
      </>
  );
  
}

export default OrderDetailsWrapper;