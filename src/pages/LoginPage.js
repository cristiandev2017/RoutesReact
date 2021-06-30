import React from 'react'
import useAuth from "../auth/useAuth";

export default function LoginPage() {
    const auth = useAuth();
    const handleLogin = () =>{
        auth.login();
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Signin</button>
        </div>
    )
}
