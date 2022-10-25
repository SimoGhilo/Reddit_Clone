import React from 'react';
import { getSubRedditPosts } from '../API/api';
import { Subreddit } from '../subreddits/subreddit';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts, selectPosts } from './postSlice';
import { Comments } from './comments';
import "./posts.css";



export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    console.log(posts)

    useEffect(() => { dispatch(fetchPosts()) }, [dispatch])


    return (
        <>
            {posts.map((post) => {
                return (
                    <div className="posts">
                        <div className="container">
                            <h3>{post.title}</h3>
                            <img id='thumbnails' src={post.thumbnail}></img>
                        </div>
                        <div className="box-comment">
                            <Comments />
                        </div>
                    </div>
                )
            })}
        </>
    )
}