import React from 'react'
import useAuth from "../auth/useAuth";
import { useHistory, useLocation } from "react-router-dom";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;
    console.log(previusObjectURL)

    const auth = useAuth();

    const handleLogin = () =>{
        auth.login();
        history.push(previusObjectURL || "/dashboard")
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Signin</button>
        </div>
    )
}
