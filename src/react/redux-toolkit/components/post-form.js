import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postActions } from '../posts-slice.js';
import './Post.css';
function PostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    dispatch(postActions.addPost(newPost));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>Add a New Post</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
      <label htmlFor="body">Body:</label>
      <textarea id="body" value={body} onChange={handleBodyChange} />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
