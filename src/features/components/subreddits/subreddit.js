import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import { fetchSubreddits, selectSubReddits } from './subredditSlice';
import "./subreddit.css";
import { Categories } from './categories/index';
import { Card } from '../card/Card';




export function Subreddit() {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubReddits);

    useEffect(() => { dispatch(fetchSubreddits()) }, [dispatch])


    // console.log(subreddits);
    return (
        <div className="container">
            <h3 id="sub">Subreddits</h3>
            <nav className='subreddit-links'>
                {subreddits.map(subreddit => {
                    // console.log(subreddit);
                    return <NavLink id='link' to={`/${subreddit.display_name}`} key={subreddit.id}>
                        <div className='subreddit-icon'>

                            {/* <img id='icon' src={subreddit.icon_img} /> */}
                            <div id='name'>
                                {subreddit.display_name}
                            </div>


                        </div>
                    </NavLink>
                })}
            </nav>
        </div>
    )
}