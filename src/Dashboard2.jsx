import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaBlackTie, FaUserCircle } from "react-icons/fa";
import axios from 'axios';

const Dashboard2 = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleEditProfile = () => {
    navigate('/Profile');
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete('https://nt-devconnector.onrender.com/api/profile', {
        headers: {
          'x-auth-token': token,
        },
      });
      navigate('/Dashboard');
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className='max-w-[1100px] mx-auto p-6'>
      <h1 className='text-[48px] text-[#18a2b8] font-bold'>Dashboard</h1>
      <p className='flex items-center text-[24px] gap-x-3 text-[#333333] my-5'><FaUser /> Welcome</p>
      <div className='flex flex-wrap gap-3'>
        <button onClick={handleEditProfile} className='flex items-center justify-center gap-x-1 text-[16px] text-[#333333] w-[139px] h-[40px] bg-[#f4f4f4] hover:bg-gray-300 duration-[.3s]'>
          <FaUserCircle className='text-blue-600' /> Edit Profile
        </button>
        <button className='flex items-center justify-center gap-x-1 text-[16px] text-[#333333] w-[172px] h-[40px] bg-[#f4f4f4] hover:bg-gray-300 duration-[.3s]'>
          <FaBlackTie className='text-blue-600' /> Add Experience
        </button>
        <button className='flex items-center justify-center gap-x-1 text-[16px] text-[#333333] w-[170px] h-[40px] bg-[#f4f4f4] hover:bg-gray-300 duration-[.3s]'>
          <FaGraduationCap className='text-blue-600' /> Add Education
        </button>
      </div>
      <h2 className='text-[24px] text-[#333333] font-bold my-6'>Experience Credentials</h2>
      <div className='flex flex-wrap gap-1'>
        <p className='w-[105px] h-[58px] bg-[#f4f4f4] text-[#333333] text-center content-center font-medium'>Company</p>
        <p className='w-[65px] h-[58px] bg-[#f4f4f4] text-[#333333] text-center content-center font-medium'>Title</p>
        <p className='w-[75px] h-[58px] bg-[#f4f4f4] text-[#333333] text-center content-center font-medium'>Years</p>
        <p className='w-[32px] h-[58px] bg-[#f4f4f4] text-[#333333] text-center content-center font-medium'></p>
      </div>
      
      <h2 className='text-[24px] text-[#333333] font-bold my-6'>Education Credentials</h2>
      <div className='flex flex-wrap gap-1'>
        <p className='w-[85px] h-[58px] bg-[#f4f4f4] text-[#333333] text-center content-center font-medium'>School</p>
        <p className='w-[86px] h-[58px] bg-[#f4f4f4] text-[#333333] text-center content-center font-medium'>Degree</p>
        <p className='w-[75px] h-[58px] bg-[#f4f4f4] text-[#333333] text-center content-center font-medium'>Years</p>
        <p className='w-[32px] h-[58px] bg-[#f4f4f4] text-[#333333] text-center content-center font-medium'></p>
      </div>
      <button onClick={handleDeleteAccount} className='w-[200px] h-[40px] bg-[#dc3545] text-white text-[16px] flex items-center justify-center gap-x-1 my-10'>
        <FaUser /> Delete My Account
      </button>
    </div>
  );
};

export default Dashboard2;
