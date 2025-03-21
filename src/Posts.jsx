import React, { useEffect, useState } from 'react';
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get('https://nt-devconnector.onrender.com/api/posts', {
            headers: {
                "x-auth-token": token,
            },
        })
        .then((res) => setPosts(res.data))
    }, []);
    console.log(posts);
    

    return (
        <div className='px-[35px] font-raleway'>
            <h1 className='text-[48px] text-[#17a2b8] mt-[25px] font-bold'>Posts</h1>
            <div>
                {posts.map((post) => {
                    return(
                        <div className='border p-2 border-red-500 my-1'>
                            <h2>Name: {post.name}</h2>
                            <h2>Text: {post.text}</h2>
                        </div>
                    )
                })}                
            </div>
        </div>
    );
}

export default Posts;
