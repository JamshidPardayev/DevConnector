import React from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Dashboard(){
    return (
        <div className='px-[35px] font-raleway'>
            <h1 className='text-[48px] text-[#17a2b8] mt-[25px] font-bold '>Dashboard</h1>
            <p className='flex items-center gap-x-[5px] text-[24px] text-[#333333] mt-[10px]'><FaUser />Welcome New User</p>
            <p className='text-[16px] text-[#333333] mt-[16px]'>You have not yet setup a profile, please add some info</p>
            <Link to="/Profile">
               <button className='w-[140px] h-[40px] bg-[#17a2b8] text-[white] mt-[16px]'>Create Profile</button>
            </Link>
        </div>
    )
}
export default Dashboard;