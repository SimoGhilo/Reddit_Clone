import React, { useEffect, useState } from 'react';
import { SearchBar } from './features/components/searchBar/searchBar';
import { MainPage } from './features/components/mainPage/mainPage';
import { Subreddit } from './features/components/subreddits/subreddit';
import { Route, Routes } from 'react-router-dom';
import { Categories } from './features/components/subreddits/categories/index';
import { Posts } from './features/components/posts/posts';
import './App.css';
import AskReddit from './features/components/Pages/AskReddit';
import News from './features/components/Pages/News';
import Funny from './features/components/Pages/Funny';
import Damnthatsinteresting from './features/components/Pages/Damnthatsinteresting';
import Worldnews from './features/components/Pages/Worldnews';
import Unexpected from './features/components/Pages/Unexpected';
import Facepalm from './features/components/Pages/Facepalm';
import Tinder from './features/components/Pages/Tinder';
import Interestingasfuck from './features/components/Pages/Interestingasfuck';
import Pcmasterrace from './features/components/Pages/Pcmasterrace';
import BestofRedditorUpdates from './features/components/Pages/BestofRedditorUpdates';
import Pics from './features/components/Pages/Pics';
import NoStupidQuestions from './features/components/Pages/NoStupidQuestions';
import PublicFreakout from './features/components/Pages/PublicFreakout';
import MildlyInteresting from './features/components/Pages/MildlyInteresting';
import Politics from './features/components/Pages/Politics';
import Therewasanattempt from './features/components/Pages/Therewasanattempt';
import WhitePeopleTwitter from './features/components/Pages/WhitePeopleTwitter';
import Overwatch from './features/components/Pages/Overwatch';
import Leagueofledgends from './features/components/Pages/Leagueofledgends';
import Antiwork from './features/components/Pages/Antiwork';
import LivestreamFail from './features/components/Pages/LivestreamFail';
import Technology from './features/components/Pages/Technology';
import Gaming from './features/components/Pages/Gaming';


function App() {

  return (
    <div className='main-content'>
      <div className="sidebar">
        <Subreddit />
      </div>
      <div className="post-container">
        <Routes>
          <Route path="/Home" element={<MainPage></MainPage>}></Route>
          <Route path="/askreddit" element={<AskReddit></AskReddit>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/funny" element={<Funny></Funny>}></Route>
          <Route path="/Damnthatsinteresting" element={<Damnthatsinteresting></Damnthatsinteresting>}></Route>
          <Route path="/worldnews" element={<Worldnews></Worldnews>}></Route>
          <Route path="/unexpected" element={<Unexpected></Unexpected>}></Route>
          <Route path="/facepalm" element={<Facepalm></Facepalm>}></Route>
          <Route path="/Tinder" element={<Tinder></Tinder>}></Route>
          <Route path="/interestingasfuck" element={<Interestingasfuck></Interestingasfuck>}></Route>
          <Route path="/pcmasterrace" element={<Pcmasterrace></Pcmasterrace>}></Route>
          <Route path="/BestofRedditorUpdates" element={<BestofRedditorUpdates></BestofRedditorUpdates>}></Route>
          <Route path="/pics" element={<Pics></Pics>}></Route>
          <Route path="/NoStupidQuestions" element={<NoStupidQuestions></NoStupidQuestions>}></Route>
          <Route path="/PublicFreakout" element={<PublicFreakout></PublicFreakout>}></Route>
          <Route path="/mildlyinteresting" element={<MildlyInteresting></MildlyInteresting>}></Route>
          <Route path="/politics" element={<Politics></Politics>}></Route>
          <Route path="/therewasanattempt" element={<Therewasanattempt></Therewasanattempt>}></Route>
          <Route path="/WhitePeopleTwitter" element={<WhitePeopleTwitter></WhitePeopleTwitter>}></Route>
          <Route path="/Overwatch" element={<Overwatch></Overwatch>}></Route>
          <Route path="/leagueoflegends" element={<Leagueofledgends></Leagueofledgends>}></Route>
          <Route path="/antiwork" element={<Antiwork></Antiwork>}></Route>
          <Route path="/LivestreamFail" element={<LivestreamFail></LivestreamFail>}></Route>
          <Route path="/technology" element={<Technology></Technology>}></Route>
          <Route path="/gaming" element={<Gaming></Gaming>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
