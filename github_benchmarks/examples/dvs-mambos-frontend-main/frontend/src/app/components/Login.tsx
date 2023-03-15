import React, { useState } from "react";
import { useAuth } from "../auth/provider/AuthProvider";

const Login = () => {
  
  const [username, setUsername] = useState('');
  
  const {login}: any = useAuth();

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
  
}

export default Login;
