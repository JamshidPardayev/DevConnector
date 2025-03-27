import { Fragment } from "react";
import { FaCode, FaUser } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Header() {
    const token = localStorage.getItem('token'); 
    const navigate = useNavigate();
    function Logout(){
        localStorage.removeItem("token")
        return navigate("/signup")
    }
    return (
        

        <Fragment>
            <nav className="flex flex-wrap items-center justify-between px-[35px] bg-[#343a40e7] min-h-[62px] border-b-[2px] border-b-[#17a2b8] font-raleway">
                <Link to="/">
                    <h1 className="flex items-center gap-x-2 text-[24px] font-bold text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">
                        <FaCode /> DevConnector
                    </h1>
                </Link>
                <ul className="flex flex-wrap items-center gap-x-[20px]">
                    {!token ? (
                        <>
                            <Link to='/Developers'>
                                <li className="text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Developers</li>
                            </Link>
                            <Link to='/Signup'>
                                <li className="text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Register</li>
                            </Link>
                            <Link to='/Login'>
                                <li className="text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Login</li>
                            </Link>
                            
                        </>
                    ) : (
                        <>
                            <Link to='/Developers'>
                                <li className="text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Developers</li>
                            </Link>
                            <Link to='Posts'>
                                <li className="flex items-center text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">Posts</li>
                            </Link>
                            <Link to='Dashboard'>
                                <li className="flex items-center text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">
                                    <FaUser /> Dashboard
                                </li>
                            </Link>
                            <button onClick={Logout}>
                                <li className="flex items-center text-[16px] font-medium text-[white] cursor-pointer hover:text-blue-400 duration-[.3s]">
                                    <CiLogin /> Logout
                                </li>
                            </button>
                        </>
                    )}
                </ul>
            </nav>
        </Fragment>
    );
}

export default Header;
