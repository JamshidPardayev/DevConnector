import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; 

function Posts() {
    const [posts, setPosts] = useState([]);
    const [postText, setPostText] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found");
            return;
        }

        axios.get('https://nt-devconnector.onrender.com/api/posts', {
            headers: {
                "x-auth-token": token,
            },
        })
        .then((res) => setPosts(res.data))
        .catch(err => console.error(err));
    }, []);

    const handleSubmit = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found");
            return;
        }

        const newPost = { text: postText };

        axios.post('https://nt-devconnector.onrender.com/api/posts', newPost, {
            headers: {
                "x-auth-token": token,
            },
        })
        .then((res) => {
            setPosts([res.data, ...posts]);
            setPostText(''); 
        })
        .catch(err => console.error(err));
    };

    return (
        <div className='px-[35px] font-raleway'>
            <h1 className='text-[48px] text-[#17a2b8] mt-[25px] font-bold'>Posts</h1>
            <p className='flex items-center gap-x-3 text-[#333333] text-[24px]'><FaUser /> Welcome to the community</p>
            <h2 className='h-[45px] bg-[#18a2b8] text-white content-center px-4 text-[18px] font-bold mt-4'>Say Something...</h2>
            <textarea
                className='border border-gray-300 h-[130px] p-2 mt-4 w-full outline-none text-gray-500 tracking-[2px]'
                placeholder='Create a Post'
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
            />
            <button onClick={handleSubmit} className='w-[100px] h-[40px] text-white bg-[#343a40] hover:bg-black duration-500'>Submit</button>
            <div>
                {posts.map((post) => (
                    <div key={post._id} className='flex flex-wrap gap-x-[50px] mt-4 border py-4 px-8 border-gray-300 my-1 items-center'>
                        <div className='text-center'>
                            <img className='w-[100px] h-[100px] rounded-[50%]' src={post.avatar} alt="" />
                            <h2 className='text-[#17a2b8] font-bold mt-2'>{post.name}</h2>
                        </div>
                        <div>
                            <h2>{post.text}</h2>
                            <p className='text-[12px] text-[#aaaaaa] mt-5 mb-2'>Posted on {post.date}</p>
                            <div className='flex flex-wrap gap-x-[7px]'>
                                <p className='w-[70px] h-[40px] bg-[#f4f4f4] text-[24px] flex items-center justify-center cursor-pointer duration-[.3s] hover:text-gray-700'><BiLike /></p>
                                <p className='w-[70px] h-[40px] bg-[#f4f4f4] text-[24px] flex items-center justify-center cursor-pointer duration-[.3s] hover:text-gray-700'><BiDislike /></p>
                                <Link to={`/posts/${post._id}`}><button className='w-[130px] h-[40px] bg-[#17a2b8] text-[white] hover:bg-blue-600 duration-[.3s]'>Discussion</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;
