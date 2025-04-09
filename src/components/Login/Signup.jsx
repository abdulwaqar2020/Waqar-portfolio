import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signUpBtn = () => {
        const registeredHere = {
            name: name,
            email: email,
            password: password,
            avatar:"https://picsum.photos/800"
        };
        
        axios.post('https://api.escuelajs.co/api/v1/users/', registeredHere)
            .then((res) => {
                navigate("/login");
                alert("Your account has been created successfully");
                console.log("Account created", res);
            })
            .catch((err) => {
                alert("Please try again.");
                console.log("Try Again", err);
            });
    };

    return (
        <>
            <h1 className='font-bold text-4xl text-center mt-32 -mb-20 text-sky-500'>Personal Portfolio</h1>
            <div className='flex justify-center items-center h-screen'>
            
                <div className='bg-white border rounded-md shadow-md text-black w-80 p-6'>
                    <p className='text-2xl font-bold mb-4'>Create a New Account</p>
                    <p className='mb-4'>It's quick and easy.</p>
                    
                    {/* Name Input */}
                    <div className='border rounded-md shadow-md my-2 p-3'>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder='Enter Name'
                            className='w-full p-2 border rounded-md'
                        />
                    </div>

                    {/* Email Input */}
                    <div className='border rounded-md shadow-md my-2 p-3'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='Enter Email'
                            className='w-full p-2 border rounded-md'
                        />
                    </div>

                    <div className='border rounded-md shadow-md my-2 p-3'>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder='Enter Password'
                            className='w-full p-2 border rounded-md'
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button 
                        onClick={signUpBtn}
                        className='w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700'>
                        Sign Up
                    </button>

                    {/* Link to Login */}
                    <div className='mt-4 text-center'>
                        <p>Already have an account? <Link to="/login" className='text-blue-600'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
