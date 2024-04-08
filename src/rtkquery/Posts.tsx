import React, { FormEvent, useState } from "react";
import { useAddPostsMutation, useGetPostsQuery } from "../redux/api/api";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { isLoading, isError, data, isSuccess } = useGetPostsQuery("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [addPosts] = useAddPostsMutation();

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: Post = {
      title,
      body,
      id: Math.random() * 1000,
    };
    addPosts(post);
    navigate("/");
  };
  console.log(isError, isLoading, data);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
          />
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter the Body"
          />
          <button type="submit"> Add</button>
        </form>
      </div>

      {data?.map((data, index) => (
        <PostCard key={index} post={data} />
      ))}
    </div>
  );
};

export default Posts;
