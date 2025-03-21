import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const SubmitBtn = (e) => {
        e.preventDefault();
        
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            setError("Ma'lumotni To'ldiring");
            return;
        }

        if (password !== confirmPassword) {
            setError('Password bir xil emas');
            return;
        }

        localStorage.setItem('userData', JSON.stringify({ name, email, password }));

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        alert('Registration successful!');

        navigate('/Login');
    };

    return (
        <div className='px-[35px] font-raleway'>
            <h1 className='text-[48px] text-[#17a2b8] mt-[25px] font-bold'>Sign up</h1>
            <p className='flex items-center gap-x-[5px] text-[24px] text-[#333333] mt-[10px]'>
                <FaUser /> Create Your Account
            </p>
            <form onSubmit={SubmitBtn}>
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder='Name' 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder='Email Address' 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <p className='text-[13px] text-[#888888] mt-[5px]'>
                    This site uses Gravatar so if you want a profile image, use a Gravatar email
                </p>
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder='Password' 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder='Confirm Password' 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                {error && <p className='text-red-500'>{error}</p>}
                <button 
                    className='w-[102px] h-[40px] bg-[#17a2b8] text-[white] hover:bg-blue-600 duration-[.3s] mt-[18px]' 
                    type="submit"
                >
                    Register
                </button>
            </form>
            <div className='flex flex-wrap items-center gap-x-[10px] mt-[20px]'>
                <p>Already have an account?</p>
                <Link to='/Login'>
                    <button className='text-[#17a2b8]'>Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
