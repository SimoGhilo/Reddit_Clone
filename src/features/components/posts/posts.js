import React, { useState } from 'react';
import { getSubRedditPosts } from '../API/api';
import { Subreddit } from '../subreddits/subreddit';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchComments, fetchPosts, selectComments, selectPosts } from './postSlice';
import { Comments } from './comments';
import "./posts.css";
import { fetchSearchTerm, selectSearchTerm } from '../searchBar/searchBarSlice';


export const Posts = ({ posts }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const searchTerm = useSelector(selectSearchTerm);
    const [showComment, setShowComment] = useState(false);
    var seconds = new Date().getTime() / 1000;
    console.log(posts)


    const comments = useSelector(selectComments);

    // console.log(searchTerm);

    const handleComments = (post) => {
        setShowComment(!showComment)
        dispatch(fetchComments(post.permalink))
    }


    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearchTerm(e.target.value)); ///????
        setSearch(e.target.value); //// ????
        // console.log(e.target.value);
    }


    return (
        <div>
            <div className='searchBar'>
                <div className="img-container">
                    <img src='./reddit1.png' id='icon' />
                </div>
                <label className="form-label" htmlFor="form1">Search in Reddit: </label>
                <input type="search" id="form1" className="form-control" onChange={handleSearch} />
                <button className="btn btn-primary">Search</button>
            </div>


            <div>
                {search && searchTerm.map((term) => {
                    return (
                        <div className="posts">
                            <div className="container">
                                <h4>{term.title}</h4>
                                <img className='thumbnails' src={term.thumbnail}></img>
                                <h6 onClick={() => handleComments(term)}>Comments</h6>
                            </div>
                            {showComment && <div className="box-comment">
                                {comments?.slice(0, 3).map((comment) => {
                                    return (
                                        <div className="comments">
                                            <div className="body">
                                                <h5><small>{comment.body}</small></h5>
                                            </div>
                                            <p>{comment.author}</p>
                                            <p>{Math.round((seconds - term.created_utc) / 6000)} Hours ago</p>
                                        </div>
                                    )
                                })}
                            </div>}
                        </div>
                    )
                })}

                {!search && posts.map((post) => {
                    //console.log(post)
                    return (
                        <div className="posts">
                            <div className="container">
                                <h4>{post.title}</h4>
                                <img className='thumbnails' src={post.thumbnail}></img>
                                {/* <img id='comments' src="./chat.png" alt="comments" /> */}
                            </div>
                            <h6 onClick={() => handleComments(post)}>Comments</h6>
                            {
                                showComment && <div className="box-comment">
                                    {comments?.slice(0, 3).map((comment) => {
                                        return (
                                            <div className="comments">
                                                <div className="body">
                                                    <h5><small>{comment.body}</small></h5>
                                                </div>
                                                <p>{comment.author}</p>
                                                <p>{Math.round((seconds - post.created_utc) / 6000)} Hours ago</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    )
                })}
            </div>

        </div>

    )
}