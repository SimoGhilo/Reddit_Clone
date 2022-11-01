import React, { useEffect, useState } from 'react';
import { SearchBar } from './features/components/searchBar/searchBar';
import { MainPage } from './features/components/mainPage/mainPage';
import { Subreddit } from './features/components/subreddits/subreddit';
import { Route, Routes } from 'react-router-dom';
import { Categories } from './features/components/subreddits/categories/index';
import { Posts } from './features/components/posts/posts';
import './App.css';


function App() {

  return (
    <div className='main-content'>
      <div className="sidebar">
        <Subreddit />
      </div>
      <div className="post-container">
        <Posts />
      </div>
    </div>
  );
}

export default App;
