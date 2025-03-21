import { Fragment } from "react";
import { FaCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
function Header(){
    return(
        <Fragment>
            <nav className="flex flex-wrap items-center justify-between px-[35px] bg-[#343a40e7] h-[62px]  border-b-[2px] border-b-[#17a2b8] font-raleway">
                <Link to="/">
                <h1 className="flex items-center gap-x-2 text-[24px] font-bold text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]"><FaCode /> DevConnector</h1>
                </Link>
                <ul className="flex items-center gap-x-[20px]">
                    <Link to='/Developers'>
                    <li className=" text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Developers</li>
                    </Link>
                    <Link to='/Signup'>
                    <li className=" text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Register</li>
                    </Link>
                    <Link to='Login'>
                    <li className=" text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Login</li>
                    </Link>
                    {/* <Link to='Posts'>
                    <li className="flex items-center text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Posts</li>
                    </Link>
                    <Link to='Dashboard'>
                    <li className="hidden items-center text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]"><FaUser /> Dashboard</li>
                    </Link>
                    <Link to='/Logout'>
                    <li className="hidden items-center text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]"><CiLogin /> Logout</li>
                    </Link> */}
                </ul>
            </nav>
        </Fragment>

    )
}
export default Header;