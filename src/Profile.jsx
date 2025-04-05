import axios from 'axios';
import React, { useState } from 'react';
import { FaUser, FaTwitter, FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const [formData, setFormData] = useState({
        status: '',
        company: '',
        website: '',
        location: '',
        skills: '',
        github: '',
        bio: '',
        twitter: '',
        facebook: '',
        youtube: '',
        linkedin: '',
        instagram: ''
    });

    const [isNetworksVisible, setIsNetworksVisible] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate(); // Navigate funktsiyasini o'rnating

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://nt-devconnector.onrender.com/api/profile', formData, {
                headers: {
                    'x-auth-token': token,
                },
            });
            navigate('/Dashboard2'); // Muvaffaqiyatli saqlaganda Dashboard2 ga yo'naltirish
        } catch (error) {
            console.error("Error saving profile", error);
        }
    };

    const toggleNetworks = () => {
        setIsNetworksVisible(prev => !prev);
    };

    return (
        <div className='max-w-[1200px] mx-auto p-10'>
            <h1 className='text-[48px] text-[#17a2b8] font-bold'>Create Your Profile</h1>
            <p className='flex items-center gap-x-2 text-[#333333] text-[24px]'>
                <FaUser /> Let's get some information to make your
            </p>
            <p className='text-[#333333] text-[14px] my-4'>* = required field</p>

            <form onSubmit={handleSubmit}>
                <select name="status" onChange={handleChange} className='border border-gray-300 outline-none w-[100%] h-[40px] text-[22px] px-2 rounded-[3px]'>
                    <option value="">* Select Professional status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Student of Learning">Student of Learning</option>
                    <option value="Instructor or Teacher">Instructor or Teacher</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                </select>
                <p className='text-[#888888] text-[14px] mb-4 mt-1'>Give us an idea of where you are at in your career</p>

                <input type="text" name="company" onChange={handleChange} placeholder='Company' required className='border border-gray-300 outline-none w-[100%] h-[40px] text-[22px] px-2 rounded-[3px]' />
                <p className='text-[#888888] text-[14px] mb-4 mt-1'>Could be your own company or one you work for</p>

                <input type="text" name="website" onChange={handleChange} placeholder='Website' required className='border border-gray-300 outline-none w-[100%] h-[40px] text-[22px] px-2 rounded-[3px]' />
                <p className='text-[#888888] text-[14px] mb-4 mt-1'>Could be your own or a company website</p>

                <input type="text" name="location" onChange={handleChange} placeholder='Location' required className='border border-gray-300 outline-none w-[100%] h-[40px] text-[22px] px-2 rounded-[3px]' />
                <p className='text-[#888888] text-[14px] mb-4 mt-1'>City & state suggested (eg. Boston, MA)</p>

                <input type="text" name="skills" onChange={handleChange} placeholder='* Skills' required className='border border-gray-300 outline-none w-[100%] h-[40px] text-[22px] px-2 rounded-[3px]' />
                <p className='text-[#888888] text-[14px] mb-4 mt-1'>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</p>

                <input type="text" name="github" onChange={handleChange} placeholder='Github Username' className='border border-gray-300 outline-none w-[100%] h-[40px] text-[22px] px-2 rounded-[3px]' />
                <p className='text-[#888888] text-[14px] mb-4 mt-1'>If you want your latest repos and a Github link, include your username</p>

                <textarea name="bio" onChange={handleChange} placeholder='A short bio of yourself' className='border border-gray-300 outline-none w-[100%] h-[80px] text-[18px] px-2 rounded-[3px]'></textarea>
                <p className='text-[#888888] text-[14px] mb-4 mt-1'>Tell us a little about yourself</p>

                <div className='flex gap-3 flex-wrap'>
                    <button type="button" onClick={toggleNetworks} className='text-[16px] text-[#333333] font-normal bg-[#f4f4f4] h-[38px] w-[234px] hover:bg-gray-300 duration-[.3s]'>
                        Add Social Network Links
                    </button>
                    <p className='text-[16px] text-[#333333] font-normal h-[38px]'>Optional</p>
                </div>

                {isNetworksVisible && (
                    <div className='networks'>
                        <div className='flex gap-x-3 items-center mt-4'>
                            <FaTwitter className='w-[32px] h-[32px] text-blue-500' />
                            <input type="text" name="twitter" onChange={handleChange} placeholder='Twitter URL' className='h-[40px] w-[100%] px-2 outline-none border border-gray-300' />
                        </div>
                        <div className='flex gap-x-3 items-center mt-4'>
                            <FaFacebookF className='w-[32px] h-[32px] bg-blue-800 py-1 text-white' />
                            <input type="text" name="facebook" onChange={handleChange} placeholder='Facebook URL' className='h-[40px] w-[100%] px-2 outline-none border border-gray-300' />
                        </div>
                        <div className='flex gap-x-3 items-center mt-4'>
                            <IoLogoYoutube className='w-[32px] h-[32px] text-red-600' />
                            <input type="text" name="youtube" onChange={handleChange} placeholder='YouTube URL' className='h-[40px] w-[100%] px-2 outline-none border border-gray-300' />
                        </div>
                        <div className='flex gap-x-3 items-center mt-4'>
                            <FaLinkedin className='w-[32px] h-[32px] text-blue-500' />
                            <input type="text" name="linkedin" onChange={handleChange} placeholder='LinkedIn URL' className='h-[40px] w-[100%] px-2 outline-none border border-gray-300' />
                        </div>
                        <div className='flex gap-x-3 items-center mt-4'>
                            <FaInstagram className='w-[32px] h-[32px] text-pink-500' />
                            <input type="text" name="instagram" onChange={handleChange} placeholder='Instagram URL' className='h-[40px] w-[100%] px-2 outline-none border border-gray-300' />
                        </div>
                    </div>
                )}

                <div className='flex flex-wrap gap-3 mt-10'>
                    <button type="submit" className='text-[16px] w-[120px] h-[38px] bg-[#17a2b8] text-white hover:bg-blue-600 duration-[.3s]'>Send</button>
                    <Link to="/Dashboard">
                        <button type="button" className='text-[16px] w-[120px] h-[38px] bg-[#f4f4f4] hover:bg-gray-300 duration-[.3s]'>Go Back</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Profile;
