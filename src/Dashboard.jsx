import React from 'react'
import { FaUser } from "react-icons/fa";


function Dashboard(){
    return (
        <div className='px-[35px] font-raleway'>
            <h1 className='text-[48px] text-[#17a2b8] mt-[25px] font-bold '>Sign In</h1>
            <p className='flex items-center gap-x-[5px] text-[24px] text-[#333333] mt-[10px]'><FaUser />Welcome New User</p>
            <p className='text-[16px] text-[#333333] mt-[16px]'>You have not yet setup a profile, please add some info</p>
            <button className='w-[140px] h-[40px] bg-[#17a2b8] text-[white] mt-[16px]'>Create Profile</button>
        </div>
    )
}
export default Dashboard;