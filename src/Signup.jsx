import axios from 'axios';
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const translations = {
    en: {
        title: "Sign Up",
        subtitle: "Create an Account",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        confirmPasswordPlaceholder: "Confirm Password",
        errorFill: "Please fill in all fields.",
        errorPasswordMismatch: "Passwords do not match.",
        registrationSuccess: "Registration successful!",
        signIn: "Sign In",
        alreadyHaveAccount: "Already have an account?",
        gravatarInfo: "Your Gravatar image will be displayed here."
    },
};

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [language, setLanguage] = useState('en');
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!name || !email || !password || !confirmPassword) {
            setError(translations[language].errorFill);
            return;
        }

        if (password !== confirmPassword) {
            setError(translations[language].errorPasswordMismatch);
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post('https://nt-devconnector.onrender.com/api/users', { name, email, password, });
            localStorage.setItem("token", res.data.token);
            setSuccessMessage(translations[language].registrationSuccess);
            localStorage.setItem('userData', JSON.stringify({ name, email, password }));
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate('/Login');
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`px-[35px] min-h-[89vh] font-raleway ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className='flex items-center flex-wrap justify-between'>
                <h1 className='text-[48px] text-[#17a2b8] mt-[25px] font-bold'>{translations[language].title}</h1>
                <div className='flex items-center'>
                    <select className='outline-none cursor-pointer' onChange={(e) => setLanguage(e.target.value)} value={language}>
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                        <option value="uz">O'zbekcha</option>
                    </select>
                    <button 
                        className={`ml-4 p-2 rounded ${darkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`} 
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
            <p className='flex items-center gap-x-[5px] text-[24px] mt-[10px]'>
                <FaUser /> {translations[language].subtitle}
            </p>
            <form onSubmit={handleSubmit}>
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    placeholder={translations[language].namePlaceholder} 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required
                />
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    placeholder={translations[language].emailPlaceholder} 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
                <p className='text-[13px] text-[#888888] mt-[5px]'>
                    {translations[language].gravatarInfo}
                </p>
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    placeholder={translations[language].passwordPlaceholder} 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    placeholder={translations[language].confirmPasswordPlaceholder} 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required
                />
                {error && <p className='text-red-500'>{error}</p>}
                {successMessage && <p className='text-green-500'>{successMessage}</p>}
                <button 
                    className='w-[102px] h-[40px] bg-[#17a2b8] text-[white] hover:bg-blue-600 duration-[.3s] mt-[18px]' 
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : translations[language].signIn}
                </button>
            </form>
            <div className='flex flex-wrap items-center gap-x-[10px] mt-[20px]'>
                <p>{translations[language].alreadyHaveAccount}</p>
                <Link to='/Login'>
                    <button className='text-[#17a2b8]'>{translations[language].signIn}</button>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
