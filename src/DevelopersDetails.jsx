import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";

const DevelopersDetails = () => {
    const [developer, setDeveloper] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`https://nt-devconnector.onrender.com/api/profile/user/${id}`, {
                headers: {
                    "x-auth-token": token,
                },
            })
            .then((res) => setDeveloper(res.data))
    }, []);

    console.log(developer);
    
    return (
        <div className='px-[35px]'>
            <Link to="/Developers">
                <button className="w-[150px] h-[40px] my-5 bg-[#f4f4f4] text-[#333333]">Back to Developer</button>
            </Link>
            <div className='flex flex-col w-full min-h-[550px] bg-[#17a2b8] text-white  items-center py-10'>
                <img className='rounded-[50%]' src={developer.user?.avatar} alt={developer.user?.name} />
                <h2 className='font-bold text-[48px] mt-2'>{developer.user?.name}</h2>
                <h2 className='text-[24px] font-medium mt-3'>{developer.status} at {developer.company}</h2>
                <h2 className='text-[16px] mt-2'>{developer.location}</h2>
                <FaGlobe className='text-[36px] mt-4'/>
            </div>
            <div className='my-4 border border-gray-300 bg-[#f4f4f4]'>
                <div className='py-10 text-center '>
                    <h2 className='text-[24px] font-bold text-[#17a2b8] '>Nos Bio</h2>
                    <p className='text-[#333333] mt-2'>{developer.bio}</p>
                </div>
                <hr className='w-[90%] mx-auto border-gray-400'/>
                <div className='py-10 text-center '>
                    <h2 className='text-[24px] font-bold text-[#17a2b8] '>Skill Set</h2>
                    <p className='text-[#333333] mt-2'>{developer.skills?.join(', ')}</p>
                </div>
            </div>
            <div className='flex justify-around gap-x-4'>
                <div className='border w-full text-center min-h-[150px] content-center'>
                    <h2 className='text-[24px] text-[#17a2b8] font-bold'>Experience</h2>
                    <p className='font-bold text-black'>
                        {developer.experience ? developer.experience : "No experience credentials"}
                    </p>
                </div>
                <div className='border w-full text-center min-h-[150px] content-center'>
                    <h2 className='text-[24px] text-[#17a2b8] font-bold'>Education</h2>
                    <p className='font-bold text-black'>
                        {developer.education ? developer.education : "No education credentials"}
                    </p>
                </div>
           </div>
           <h2 className='text-[24px] text-[#17a2b8] font-bold my-5'>Github Repos</h2>

        </div>
    );
};

export default DevelopersDetails;
