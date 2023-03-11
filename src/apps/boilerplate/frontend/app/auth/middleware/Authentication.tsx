import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { JsxElement } from "typescript";

type LayoutProps = {
  loginPath: string;
  children: React.ReactNode | any;
}

const Authentication:React.FunctionComponent<LayoutProps> = ({ children, loginPath}) => {
  
  const {user}:any = useAuth();

  const location = useLocation();

  if (!user.username) {
    
    return <Navigate to={loginPath} state={{ path: location.pathname }} />;
    
  }

  return children;
  
};

export default Authentication;
