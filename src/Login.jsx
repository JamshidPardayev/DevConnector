import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const translations = {
    en: {
        title: 'Sign In',
        subtitle: 'Sign Into Your Account',
        emailPlaceholder: 'Email Address',
        passwordPlaceholder: 'Password',
        loginButton: 'Login',
        noAccount: "Don't have an account?",
        signUp: 'Sign Up',
        errorIncorrect: 'Email or password is incorrect',
        errorNoUser: 'No user found. Please sign up first.',
    },
    ru: {
        title: 'Войти',
        subtitle: 'Войдите в свой аккаунт',
        emailPlaceholder: 'Адрес электронной почты',
        passwordPlaceholder: 'Пароль',
        loginButton: 'Войти',
        noAccount: 'У вас нет аккаунта?',
        signUp: 'Зарегистрироваться',
        errorIncorrect: 'Неправильный адрес электронной почты или пароль',
        errorNoUser: 'Пользователь не найден. Пожалуйста, сначала зарегистрируйтесь.',
    },
    uz: {
        title: 'Kirish',
        subtitle: 'Hisobingizga kiring',
        emailPlaceholder: 'Elektron pochta manzili',
        passwordPlaceholder: 'Parol',
        loginButton: 'Kirish',
        noAccount: 'Hisobingiz yo\'qmi?',
        signUp: 'Ro\'yxatdan o\'tish',
        errorIncorrect: 'Elektron pochta yoki parol noto\'g\'ri',
        errorNoUser: 'Foydalanuvchi topilmadi. Iltimos, avval ro\'yxatdan o\'ting.',
    }
};

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [language, setLanguage] = useState('en');
    const [darkMode, setDarkMode] = useState(false); // Dark mode state
    const navigate = useNavigate();

    const goLogin = (e) => {
        e.preventDefault();
        
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData) {
            if (userData.email === email && userData.password === password) {
                navigate('/Dashboard');
            } else {
                setError(translations[language].errorIncorrect);
            }
        } else {
            setError(translations[language].errorNoUser);
        }
    };

    return (
        <div className={`px-[35px] min-h-[89vh]  font-raleway ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className='flex items-center justify-between'>
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
            <form onSubmit={goLogin}>
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder={translations[language].emailPlaceholder} 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder={translations[language].passwordPlaceholder} 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                {error && <p className='text-red-500'>{error}</p>}
                <button 
                    className='w-[102px] h-[40px] bg-[#17a2b8] text-[white] hover:bg-blue-600 duration-[.3s] mt-[18px]' 
                    type="submit"
                >
                    {translations[language].loginButton}
                </button>
            </form>
            <div className='flex flex-wrap items-center gap-x-[10px] mt-[20px]'>
                <p>{translations[language].noAccount}</p>
                <Link to='/Signup'>
                    <button className='text-[#17a2b8]'>{translations[language].signUp}</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
