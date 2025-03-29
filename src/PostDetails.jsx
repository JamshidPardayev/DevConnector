import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setPost(res.data))
      .catch((error) => console.error("Error fetching post:", error));

    // Fetch comments
    axios
      .get(`https://nt-devconnector.onrender.com/api/posts/${id}/comments`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setComments(Array.isArray(res.data) ? res.data : []))
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setComments([]);
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitComment();
    }
  };

  const submitComment = () => {
    if (comment.trim() === "") return;

    const token = localStorage.getItem("token");
    const url = editingCommentId
      ? `https://nt-devconnector.onrender.com/api/posts/comment/${editingCommentId}`
      : `https://nt-devconnector.onrender.com/api/posts/comment/${id}`;
      
    const method = editingCommentId ? 'PUT' : 'POST';

    axios({
      method,
      url,
      data: { text: comment },
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => {
        if (editingCommentId) {
          setComments((prevComments) =>
            prevComments.map((c) =>
              c._id === editingCommentId ? res.data : c
            )
          );
          setEditingCommentId(null);
        } else {
          setComments((prevComments) => [...prevComments, res.data]);
        }
        setComment("");
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };

  const startEditing = (c) => {
    setComment(c.text);
    setEditingCommentId(c._id);
  };

  const cancelEditing = () => {
    setComment("");
    setEditingCommentId(null);
  };

  return (
    <div className="py-4 px-8">
      <Link to={"/Posts"}>
        <button className="w-[150px] h-[40px] my-5 bg-[#f4f4f4] text-[#333333]">Back to Post</button>
      </Link>
      <div className="flex flex-wrap gap-x-[50px] mt-4 border py-4 px-8 border-gray-300 my-1 items-center">
        <div className="text-center">
          <img className="w-[100px] h-[100px] rounded-[50%]" src={post.avatar} alt="" />
          <h2 className="text-[#17a2b8] font-bold mt-2">{post.name}</h2>
        </div>
        <div>
          <h2>{post.text}</h2>
          <p className="text-[12px] text-[#aaaaaa] mt-5 mb-2">Posted on {post.date}</p>
          <div className="flex flex-wrap gap-x-[7px]">
            <p className="w-[70px] h-[40px] bg-[#f4f4f4] text-[24px] flex items-center justify-center cursor-pointer duration-[.3s] hover:text-gray-700">
              <BiLike />
            </p>
            <p className="w-[70px] h-[40px] bg-[#f4f4f4] text-[24px] flex items-center justify-center cursor-pointer duration-[.3s] hover:text-gray-700">
              <BiDislike />
            </p>
            <Link to={`/posts/${post._id}`}>
              <button className="w-[130px] h-[40px] bg-[#17a2b8] text-[white] hover:bg-blue-600 duration-[.3s]">
                Discussion
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h2 className='h-[45px] bg-[#18a2b8] text-white content-center px-4 text-[18px] font-bold mt-4'>
        {editingCommentId ? 'Edit Comment' : 'Leave a Comment'}
      </h2>
      <textarea
        className='border border-gray-300 h-[130px] p-2 mt-4 w-full outline-none text-gray-500 tracking-[2px]'
        placeholder='Comment the Post'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={handleCommentSubmit}
      />
      <button className='w-[100px] h-[40px] text-white bg-[#343a40] hover:bg-black duration-500' onClick={submitComment}>
        {editingCommentId ? 'Update' : 'Submit'}
      </button>
      {editingCommentId && (
        <button className='ml-2 w-[100px] h-[40px] text-white bg-red-600 hover:bg-red-800 duration-500' onClick={cancelEditing}>
          Cancel
        </button>
      )}
      <div className="mt-6">
        <h2 className='font-bold text-lg'>Comments:</h2>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((c) => (
            <div key={c._id} className="border-b py-2 text-black">
              <p className="font-semibold h-[30px]">{c.name}</p>
              <p className="h-[30px] cursor-pointer text-blue-600" onClick={() => startEditing(c)}>
                {c.text} (Edit)
              </p>
              <p className="h-[30px] text-[12px] text-gray-500">{c.date}</p>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
};

export default PostDetails;
