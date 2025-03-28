import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Developers() {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get('https://nt-devconnector.onrender.com/api/profile', {
            headers: {
                "x-auth-token": token,
            },
        }).then((res) => setDevelopers(res.data) )
    }, [])

    return (
        <div className='px-[35px] font-raleway'>
            <h1 className='text-[48px] text-[#17a2b8] mt-[25px] font-bold'>Developers</h1>
            <p className='flex items-center gap-x-3 text-[#333333] text-[24px]'><FaConnectdevelop /> Browse and connect with developers</p>
            
            <div>
                {developers?.map((developer, index) => {
                    return(
                        <div key={index} className='flex flex-wrap bg-[#f4f4f4] mt-4  justify-between border p-4 border-gray-300 my-1  px-4 items-center'>
                           <div className='flex flex-wrap items-center gap-x-[30px]'>
                                <img className='rounded-[50%]' src={developer.user.avatar} alt="" />
                                    <div>
                                    <h2 className='font-bold text-[24px]'>{developer.user.name}</h2>
                                    <h2 className='text-[16px] mt-2'>{developer.status} at {developer.company}</h2>
                                    <h2 className='text-[16px] mt-3'>{developer.location}</h2>
                                    <Link to={`/developers/${developer.user._id}`}>
                                    <button className='w-[125px] h-[40px] bg-[#17a2b8] text-[#ffffff] cursor-pointer hover:bg-blue-600 duration-[.3s] mt-3'>View Profile</button>
                                    </Link>
                                </div>
                            </div>
                            {/* <h2 className='flex flex-col text-[#17a2b8] mr-[40px]'>{developer.skills}</h2> */}
                        </div>
                    )
                })}                
            </div>
        </div>
    );
}
export default Developers;