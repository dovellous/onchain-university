import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Unauthorized from "../../components/Unauthorized";
import { useAuth } from "../provider/AuthProvider";

type Perms = {
  some: Function
}

type Props = {
  permissions: Perms
}

const Authorization: React.FC<Props> = ({ permissions }) => {
  
  const { user }: any = useAuth();
  
  const location: any = useLocation();
  
  if (user.username) {
    
    const userPermissions: any = user.permissions;
    
    const isAllowed: boolean = permissions.some((allowed: any) =>
      userPermissions.includes(allowed)
    );
    
    return isAllowed ? <Outlet /> : <Unauthorized />;
    
  }
  
  return <Navigate to='/login' state={{ path: location.pathname }} replace />;
  
};

export default Authorization;
