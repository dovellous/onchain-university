import React, {lazy} from "react";
import PageContentWrapper from "../../../layout/wrapper/PageContentWrapper";

const OrdersPage = lazy(() => import("./OrdersPage"));

type PageProps = {
  children?: React.ReactNode;
}

const OrdersWrapper:React.FunctionComponent<PageProps> = ({ children, ...props}) : any  => {

  return (
      <>
          <PageContentWrapper pageTitle={"Orders"} breadCrumbs={[]}>
              <OrdersPage  />
          </PageContentWrapper>
      </>
  );
  
}

export default OrdersWrapper;