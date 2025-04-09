import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const authentication = {
            email: email,
            password: password,
        };
        axios
            .post("https://api.escuelajs.co/api/v1/auth/login", authentication)
            .then((res) => {
                localStorage.setItem('token', res.data.access_token);
                navigate('/');
                alert('Logged in successfully!');
                console.log('Login successful:', res);
            })
            .catch((err) => {
                const errorMessage = err.response?.data?.message || 'An error occurred. Please try again.';
                setError(errorMessage);
                console.error('Error:', err);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-5xl mr-32 text-sky-500">
                <h1 className="font-bold">Personal Portfolio</h1>
                <p className="text-white text-xl">
                    My Personal Portfolio helps you <br /> connect and share your thoughts with me.
                </p>
            </div>
            <div className="bg-white border rounded-md shadow-md text-black w-80 p-6">
                <p className="text-lg font-bold my-2 ml-2 mb-4 p-2">Login to Personal Portfolio</p>
                <div className="border rounded-md shadow-md my-2 p-3">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your Email Address"
                    />
                </div>
                <div className="border rounded-md shadow-md my-2 p-3">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your Password"
                    />
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button
                    onClick={handleSubmit}
                    className="text-white bg-blue-500 w-full p-3 mt-3 border rounded-md"
                >
                    Log in
                </button>
                <div className="text-center w-full mt-4">
                    <Link to="/signup" className="bg-green-600 text-white p-3 border rounded-md block">
                        Create a New Account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
