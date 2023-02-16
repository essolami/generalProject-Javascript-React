import React from 'react';
import './Post.css';
function Post(props) {
  const { posts } = props;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
