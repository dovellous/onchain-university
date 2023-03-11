import React from "react";
import {useSelector} from "react-redux";

type PageProps = {
  children?: React.ReactNode;
}

const DashboardPage:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
 
  return (
      <>

          <h1>Dashboard Page</h1>
          {children}

      </>

  );
  
};

export default DashboardPage;