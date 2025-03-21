import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const goLogin = (e) => {
        e.preventDefault();
        
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData) {
            if (userData.email === email && userData.password === password) {
                navigate('/Dashboard');
            } else {
                setError('Email or password is incorrect');
            }
        } else {
            setError('No user found. Please sign up first.');
        }
    };

    return (
        <div className='px-[35px] font-raleway'>
            <h1 className='text-[48px] text-[#17a2b8] mt-[25px] font-bold'>Sign In</h1>
            <p className='flex items-center gap-x-[5px] text-[24px] text-[#333333] mt-[10px]'>
                <FaUser /> Sign Into Your Account
            </p>
            <form onSubmit={goLogin}>
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder='Email Address' 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder='Password' 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                {error && <p className='text-red-500'>{error}</p>}
                <button 
                    className='w-[102px] h-[40px] bg-[#17a2b8] text-[white] hover:bg-blue-600 duration-[.3s] mt-[18px]' 
                    type="submit"
                >
                    Login
                </button>
            </form>
            <div className='flex flex-wrap items-center gap-x-[10px] mt-[20px]'>
                <p>Don't have an account?</p>
                <Link to='/Signup'>
                    <button className='text-[#17a2b8]'>Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
