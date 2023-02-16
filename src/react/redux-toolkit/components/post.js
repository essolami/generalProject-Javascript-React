import React from 'react';
import './Post.css';
import { useSelector, useDispatch } from 'react-redux';
import { postActions } from '../posts-slice.js';
function Post() {
  // const { posts } = useSelector((state) => state.post);
  // const handleDelete = (id) => {
  //   console.log(id);
  // };
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post" onClick={(id) => handleDelete}>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
