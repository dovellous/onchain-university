import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PERMISSIONS from "../permissions/Permissions";

const AuthContext = createContext(null);

type UserProfileExtras = {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  zip?: string;
  state?: string;
  country?: string;
  dateOfBirth?: string; //YYYY-MM-DD
  gender?: string;
}

type UserProfile = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  photoUrl: string;
  extras?: UserProfileExtras;
}

type User = {
  username:string;
  accessToken?: string;
  profile?: UserProfile;
  permissions:string[];
}

type AuthProps = { 
  user?: User;
  setUser?: (user: any) => void;
  login?: (user: any) => void;
  logout?: () => void;
  children: React.ReactNode;
}


export const AuthProvider:React.FunctionComponent<AuthProps> = ({ children}) : any | null => {

  const navigate = useNavigate();

  const location = useLocation();

  const redirectPath = location.state?.path || "/profile";

  const [user, setUser] = useState<User>({
    username: '',
    permissions: []
  });

  const login = (user:any) => {
    if (user === "admin") {
      setUser({ username: user, permissions: [PERMISSIONS.CAN_VIEW_ALL] });
    } else {
      setUser({ username: user, permissions: [PERMISSIONS.CAN_VIEW_ABOUT] });
    }
    navigate(redirectPath, { replace: true });
  };

  const logout = () => {
    setUser({
      username: '',
      permissions: []
    });
  };


  return (
    // @ts-ignore
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => {

  return useContext(AuthContext);

};
