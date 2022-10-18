import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Subreddit } from '../subreddits/subreddit';
import "./mainPage.css";

export function MainPage() {


    ///DO I dispatch the getSubReddits from here ?



    return (
        <div className="container">
            {/* <div className="news">
                <h2>Title goes here</h2>
                <p>News goes here</p>
                <br />
                <div className="info-news">
                    <p>User Goes here</p>
                    <p>timeframe goes here</p>
                    <img src="Comment icon" />
                </div>
            </div>
            <div className="news">

            </div>
            <div className="news">

            </div> */}
            <div>
                <Subreddit></Subreddit>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )

}