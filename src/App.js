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
    <div id='container'>
      <div id="top">
        <SearchBar />
      </div>
      <div id="sidebar">
        <Subreddit />
      </div>
      <div id="main">
        <Posts />
      </div>
    </div>
  );
}

export default App;
