import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Posts } from '../posts/posts';
import { fetchPosts, selectPosts } from '../posts/postSlice';


const BestofRedditorUpdates = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    useEffect(() => { dispatch(fetchPosts('BestofRedditorUpdates')) }, [dispatch])
    return (
        <div className="container">
            <Posts posts={posts}></Posts>
        </div>
    );
};

export default BestofRedditorUpdates;