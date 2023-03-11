import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/provider/AuthProvider";

type PageProps = {
    children?: React.ReactNode;
}

const Navigation: React.FunctionComponent<PageProps> = ({ children, ...props }): any | null => {

    const { user }: any = useAuth();

    return (
        <>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                {user.username && <NavLink to="/profile">Profile</NavLink>}
                {!user.username && <NavLink to="/login">Login</NavLink>}
            </nav>

        </>
    );

};

export default Navigation;