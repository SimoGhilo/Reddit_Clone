import React, { useEffect, useState } from 'react';
import { SearchBar } from './features/components/searchBar/searchBar';
import { MainPage } from './features/components/mainPage/mainPage';
import { Subreddit } from './features/components/subreddits/subreddit';
import { Route, Routes } from 'react-router-dom';
import { Categories } from './features/components/subreddits/categories/index';
import './App.css';


function App() {

  return (
    <div id='container'>
      {/* <div id='search'>
        <SearchBar />
      </div>
      <div className="App">
        <div id='main'>
          <MainPage />
        </div>
        <div id='sidebar-content'>
          <Subreddit />
          <button onClick={getData}>Click</button>     </div>
      </div> */}
      <SearchBar />
      <Categories />
      <Subreddit />

    </div>
  );
}

export default App;
