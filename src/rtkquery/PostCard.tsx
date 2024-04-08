import React, { useState } from "react";
import {
  useDeletePostsMutation,
  useUpdatePostsMutation,
} from "../redux/api/api";

const PostCard = ({ post }: { post: Post }) => {
  const [deletePosts] = useDeletePostsMutation();
  const [updatePosts] = useUpdatePostsMutation();

  const [isediting, setEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleDelete = () => {
    deletePosts(post.id);
  };
  const handleUpdate = () => {
    updatePosts({ id: post.id, post: { title, body } });
  };
  return (
    <div>
      {isediting ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
