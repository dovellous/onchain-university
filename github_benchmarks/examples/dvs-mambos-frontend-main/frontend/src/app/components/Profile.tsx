import React, {useEffect} from "react";
import { useAuth } from "../auth/provider/AuthProvider";

const Profile = () => {
  
  const { user, logout }: any = useAuth();
  
  const logoutHandler = () => {
    logout();
  };
  
  useEffect(()=>{
  
  },[])
  
  return (
    <>
      <h1>Welcome {user.username}</h1>
      <button type="submit" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
  
};

export default Profile;
