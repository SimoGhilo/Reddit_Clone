import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Posts } from '../posts/posts';
import { fetchPosts, selectPosts } from '../posts/postSlice';

const Videos = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    useEffect(() => { dispatch(fetchPosts('videos')) }, [dispatch])
    return (
        <div className="container">
            <Posts posts={posts}></Posts>
        </div>
    );
};

export default Videos;