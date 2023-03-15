import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/provider/AuthProvider";
export const Navbar = () => {
  
  const { user }: any = useAuth();
  
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/extra">Extra</NavLink>
        {user.username && <NavLink to="/profile">Profile</NavLink>}
        {!user.username && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
  
};
