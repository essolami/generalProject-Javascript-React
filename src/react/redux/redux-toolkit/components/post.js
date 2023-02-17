import React from 'react';
import './Post.css';
import { useSelector, useDispatch } from 'react-redux';
import { postActions } from '../posts-slice.js';
function Post() {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(postActions.deletePost({ id }));
  };
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post"
          onClick={() => handleDelete(post.id)}
        >
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
