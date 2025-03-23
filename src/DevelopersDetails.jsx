import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DevelopersDetails = () => {
    const [developer, setDeveloper] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get(`https://nt-devconnector.onrender.com/profile/${id}`, {
                headers: {
                    "x-auth-token": token,
                },
            })
            .then((res) => setDeveloper(res.data))
    }, [id]);

    console.log(developer);
    
    return (
        <div>
            <Link to={"/Developers"}><button className="w-[150px] h-[40px] my-5 bg-[#f4f4f4] text-[#333333]">Back to Developer</button></Link> 
            <div className='flex flex-wrap bg-[#f4f4f4] mt-4 justify-between border p-4 border-gray-300 my-1 px-4 items-center'>
                <div className='flex flex-wrap items-center gap-x-[30px]'>
                    <img className='rounded-[50%]' src={developer.user?.avatar} alt="" />
                    <div>
                        <h2 className='font-bold text-[24px]'>{developer.user?.name}</h2>
                        <h2 className='text-[16px] mt-2'>{developer.social} at {developer.company}</h2>
                    </div>
                </div>
                <h2 className='flex flex-col text-[#17a2b8] mr-[40px]'>{developer.skills?.join(', ')}</h2>
            </div>
        </div>
    );
};

export default DevelopersDetails;
