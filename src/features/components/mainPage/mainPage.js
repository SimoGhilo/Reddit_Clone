import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Posts } from '../posts/posts';
import { fetchPosts, selectPosts } from '../posts/postSlice';
import { Subreddit } from '../subreddits/subreddit';
import "./mainPage.css";

export function MainPage() {


    ///DO I dispatch the getSubReddits from here ?
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    useEffect(() => { dispatch(fetchPosts('home')) }, [dispatch])

    return (
        <div className="container">
            <Posts posts={posts}></Posts>
        </div>
    )

}