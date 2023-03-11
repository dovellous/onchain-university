import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Auth.scss";
import { useAuth } from "../../../auth/provider/AuthProvider";

type PageProps = {
    children?: React.ReactNode;
}

const Login: React.FunctionComponent<PageProps> = ({ children, ...props }): any | null => {

    const [username, setUsername] = useState('');

    const { login }: any = useAuth();

    const handleLogin = () => {

        login(username);

    };

    return (
        <>

            <h1>Login Page</h1>
            <label>Name</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit" onClick={handleLogin}>
                Login
            </button>

        </>
    );

};

export default Login;