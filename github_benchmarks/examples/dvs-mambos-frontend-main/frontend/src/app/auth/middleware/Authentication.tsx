import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { JsxElement } from "typescript";

type LayoutProps = {
  user?: any,
  location: any,
  children: React.ReactNode | any;
  // Your other props here.
}

const Authentication:React.FunctionComponent<LayoutProps> = ({ children}) => {
  
  const {user}:any = useAuth();

  const location = useLocation();

  if (!user.username) {
    
    return <Navigate to="/login" state={{ path: location.pathname }} />;
    
  }

  return children;
  
};

export default Authentication;
