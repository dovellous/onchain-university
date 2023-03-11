import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../../auth/provider/AuthProvider";

type PageProps = {
    children?: React.ReactNode;
}

const Profile: React.FunctionComponent<PageProps> = ({ children, ...props }): any | null => {

    const { user, logout }: any = useAuth();

    const logoutHandler = () => {
        logout();
    };

    useEffect(() => {

    }, [])

    return (
        <>

            <h1>Profile</h1>
            <h3>Welcome {user.username}</h3>
            <button type="submit" onClick={logoutHandler}>
                Logout
            </button>

        </>
    );

};

export default Profile;