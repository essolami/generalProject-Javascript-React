import React from 'react';
import Posts from './components/post';
import PostForm from './components/post-form';

function ReduxToolkit() {
  const posts = [
    {
      id: 1,
      title: 'My First Post',
      body: 'This is my first post on this blog.',
    },
    {
      id: 2,
      title: 'My Second Post',
      body: 'This is my second post on this blog.',
    },
    {
      id: 3,
      title: 'My Third Post',
      body: 'This is my third post on this blog.',
    },
  ];
  return (
    <>
      <PostForm />
      <Posts posts={posts} />
    </>
  );
}

export default ReduxToolkit;
