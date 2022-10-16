import React, { useEffect, useState } from 'react';
import { SearchBar } from './features/components/searchBar/searchBar';
import { MainPage } from './features/components/mainPage/mainPage';
import { Subreddit } from './features/components/subreddits/subreddit';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AskReddit } from './features/components/subreddits/categories/askReddit';
import WorldNews from './features/components/subreddits/categories/worldNews';
import { Home } from './features/components/subreddits/categories/home';
import { Funny } from './features/components/subreddits/categories/funny';
import { Pics } from './features/components/subreddits/categories/pics';
import { Gaming } from './features/components/subreddits/categories/gaming';
import { Ukraine } from './features/components/subreddits/categories/ukraine';
import { LiveStreamFail } from './features/components/subreddits/categories/liveStreamFail';
import { PublicFreakout } from './features/components/subreddits/categories/publicFreakout';
import { LeagueOfLedgends } from './features/components/subreddits/categories/leagueoflegends';


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
      <Routes>

        <Route path='/home' element={<MainPage></MainPage>}>
          <Route path='/home/worldnews' element={<WorldNews></WorldNews>}></Route>
          <Route path='/home/askreddit' element={<AskReddit></AskReddit>}></Route>
          <Route path='/home/funny' element={<Funny></Funny>}></Route>
          <Route path='/home/liveStreamFail' element={<LiveStreamFail></LiveStreamFail>}></Route>
          <Route path='/home/publicFreakout' element={<PublicFreakout></PublicFreakout>}></Route>
          <Route path='/home/leagueofledgends' element={<LeagueOfLedgends></LeagueOfLedgends>}></Route>
          <Route path='/home/pics' element={<Pics></Pics>}></Route>
          <Route path='/home/gaming' element={<Gaming></Gaming>}></Route>
          <Route path='/home/ukraine' element={<Ukraine></Ukraine>}></Route>
        </Route>
        <Route path='*' element={<MainPage></MainPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
