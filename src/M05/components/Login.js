import React, { useState } from "react";
import "../components/styles/login-style.css"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            alert("Login berhasil")
            navigate("/dahsboard")
        } else {
            alert("Login gagal")
        }
    }

    return (
        <div className='login-container'>
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={username}
                    onChange={(e) = setPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login