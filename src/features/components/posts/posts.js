import React, { useState } from 'react';
import { getSubRedditPosts } from '../API/api';
import { Subreddit } from '../subreddits/subreddit';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts, selectPosts } from './postSlice';
import { Comments } from './comments';
import "./posts.css";
import { fetchSearchTerm, selectSearchTerm } from '../searchBar/searchBarSlice';


export const Posts = ({ posts }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const searchTerm = useSelector(selectSearchTerm);
    const [showComment, setShowComment] = useState(false);
    console.log(posts)




    // console.log(searchTerm);


    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearchTerm(e.target.value)); ///????
        setSearch(e.target.value); //// ????
        // console.log(e.target.value);
    }


    return (
        <div>
            <div>
                <div className="img-container">
                    <img src='./reddit_new.png' id='icon' />
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
                                <h6 onClick={() => setShowComment(!showComment)}>Comments</h6>
                            </div>
                            {showComment && <div className="box-comment">
                                <Comments />
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
                            <h6 onClick={() => setShowComment(!showComment)}>Comments</h6>
                            {
                                showComment && <div className="box-comment">
                                    <Comments post={post} />
                                </div>
                            }
                        </div>
                    )
                })}
            </div>

        </div>

    )
}