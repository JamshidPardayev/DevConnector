import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const translations = {
    en: {
        title: 'Sign up',
        subtitle: 'Create Your Account',
        namePlaceholder: 'Name',
        emailPlaceholder: 'Email Address',
        passwordPlaceholder: 'Password',
        confirmPasswordPlaceholder: 'Confirm Password',
        registrationSuccess: 'Registration successful!',
        errorFill: "Please fill out all fields",
        errorPasswordMismatch: 'Passwords do not match',
        alreadyHaveAccount: 'Already have an account?',
        signIn: 'Sign In',
        gravatarInfo: 'This site uses Gravatar so if you want a profile image, use a Gravatar email',
    },
    ru: {
        title: 'Регистрация',
        subtitle: 'Создайте свою учетную запись',
        namePlaceholder: 'Имя',
        emailPlaceholder: 'Электронная почта',
        passwordPlaceholder: 'Пароль',
        confirmPasswordPlaceholder: 'Подтвердите пароль',
        registrationSuccess: 'Регистрация успешна!',
        errorFill: 'Пожалуйста, заполните все поля',
        errorPasswordMismatch: 'Пароли не совпадают',
        alreadyHaveAccount: 'Уже есть аккаунт?',
        signIn: 'Войти',
        gravatarInfo: 'Этот сайт использует Gravatar, поэтому, если вы хотите изображение профиля, используйте адрес электронной почты Gravatar',
    },
    uz: {
        title: 'Ro\'yxatdan o\'tish',
        subtitle: 'Hisobingizni yarating',
        namePlaceholder: 'Ism',
        emailPlaceholder: 'Elektron pochta manzili',
        passwordPlaceholder: 'Parol',
        confirmPasswordPlaceholder: 'Parolni tasdiqlang',
        registrationSuccess: 'Ro\'yxatdan o\'tish muvaffaqiyatli!',
        errorFill: 'Iltimos, barcha maydonlarni to\'ldiring',
        errorPasswordMismatch: 'Parollar bir xil emas',
        alreadyHaveAccount: 'Allaqachon hisobingiz bormi?',
        signIn: 'Kirish',
        gravatarInfo: 'Ushbu sayt Gravatar’dan foydalanadi, shuning uchun agar siz profil rasmini xohlasangiz, Gravatar elektron pochta manzilidan foydalaning',
    }
};

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [language, setLanguage] = useState('en');
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const SubmitBtn = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            setError(translations[language].errorFill);
            return;
        }

        if (password !== confirmPassword) {
            setError(translations[language].errorPasswordMismatch);
            return;
        }

        localStorage.setItem('userData', JSON.stringify({ name, email, password }));

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        alert(translations[language].registrationSuccess);

        navigate('/Login');
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
            <form onSubmit={SubmitBtn}>
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder={translations[language].namePlaceholder} 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder={translations[language].emailPlaceholder} 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <p className='text-[13px] text-[#888888] mt-[5px]'>
                    {translations[language].gravatarInfo}
                </p>
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder={translations[language].passwordPlaceholder} 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    className='h-[40px] w-[100%] border mt-[18px] px-[10px] placeholder:text-[18px] outline-none'
                    required 
                    placeholder={translations[language].confirmPasswordPlaceholder} 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                {error && <p className='text-red-500'>{error}</p>}
                <button 
                    className='w-[102px] h-[40px] bg-[#17a2b8] text-[white] hover:bg-blue-600 duration-[.3s] mt-[18px]' 
                    type="submit"
                >
                    {translations[language].signIn}
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
