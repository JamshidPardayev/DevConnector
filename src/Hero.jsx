import { Fragment } from "react";
import { Link } from "react-router-dom";



function Hero() {
    return (
        <Fragment>
            <div className="bg-[url('/image/download.jpg')] w-full h-[calc(100vh-62px)] bg-cover bg-center flex flex-col items-center justify-center">
                <h1 className="text-[64px] text-[white] mb-[12px]">Developer Connector</h1>
                <p className="text-[24px] text-[white] mb-[12px]">Create a developer profile/portfolio, share posts and get help from other developers</p>
                <div className="btn flex gap-x-[10px]">
                    <Link to="/Signup">
                    <button className="w-[100px] h-[40px] bg-[#17a2b8] text-[white] hover:bg-blue-600 duration-[.3s]">Sign Up</button>
                    </Link>
                    <Link to="/Login">
                    <button className="w-[100px] h-[40px] bg-[white] text-[#333333] hover:bg-gray-300 duration-[.3s]">Login</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}
export default Hero;