import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import "./subreddit.css";




export function Subreddit() {






    return (
        <div className="container">
            <h3>Subreddits</h3>
            <div className="categories">
                <ul>
                    <Link to="/home" className="btn btn-primary"><li>Home</li></Link>
                    <Link to="/home/askreddit" className="btn btn-primary"><li>AskReddit</li></Link>
                    <Link to="/home/worldnews" className="btn btn-primary"><li>WorldNews</li></Link>
                    <Link to="/home/funny" className="btn btn-primary"><li>Funny</li></Link>
                    <Link to="/home/liveStreamFail" className="btn btn-primary"><li>LiveStreamFail</li></Link>
                    <Link to="/home/publicFreakout" className="btn btn-primary"><li>PublicFreakout</li></Link>
                    <Link to="/home/leagueofledgends" className="btn btn-primary"><li>LeagueofLegends</li></Link>
                    <Link to="/home/pics" className="btn btn-primary"><li>Pics</li></Link>
                    <Link to="/home/gaming" className="btn btn-primary"><li>Gaming</li></Link>
                    <Link to="/home/ukraine" className="btn btn-primary"><li>Ukraine</li></Link>
                </ul>
            </div>
        </div>
    )
}