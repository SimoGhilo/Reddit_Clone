import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchSubreddits, selectSubReddits } from './subredditSlice';
import "./subreddit.css";
import { Categories } from './categories/index';
import { Card } from '../card/Card';




export function Subreddit() {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubReddits);

    useEffect(() => { dispatch(fetchSubreddits()) }, [dispatch])
    // Is this the right approach to show all subreddits ??/

    ///DISPATCHING ACTIONS HERE ?

    ////SHALL I MAP OVER THE SUBREDDITS AND RENDER A LINK EACH ?



    return (
        <div className="container">
            <h3>Subreddits</h3>
            {subreddits.map((card) => { <Card post={card} /> })}
        </div>
    )
}