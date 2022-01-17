import React, { useState } from 'react';

import Post from './Post';
import './App.css';
import AddPostButton from './AddPostButton';

function App (){

  const [posts, setPosts] = useState([
    {name: "Gian", content:"Gwapa kay ka", likes:2},
    {name: "Shad", content:"Pogi ko", likes:0},
    {name: "Carlos", content:"Hanging around", likes:0},
    {name: "Reyner", content:"Pagod na ako!", likes:0},
  ])

  const addPost = () => {
    setPosts([...posts, {name: "Gian", content:"Gwapa kay ka", likes:2}])
    
  }

  return (
    <div className='app'>
      {posts.map(post => (
        <Post name={post.name} content={post.content} likes={post.likes} />
      ))}
      <AddPostButton addPostHandler={addPost} />
    </div>
  );
}

export default App;
