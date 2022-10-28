import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./searchBar.css";
import { selectSearchTerm, fetchSearchTerm } from './searchBarSlice';
import { Posts } from '../posts/posts';
import { Comments } from '../posts/comments';



export function SearchBar() {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    console.log(searchTerm);


    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearchTerm(search)); ///????
        setSearch(e.target.value); //// ????
    }


    return (
        <div className="form-outline">
            <div className="img-container">
                <img src='./reddit_new.png' id='icon' />
            </div>
            <label className="form-label" htmlFor="form1">Search in Reddit: </label>
            <input type="search" id="form1" className="form-control" onChange={handleSearch} />
            <button className="btn btn-primary">Search</button>
            <>
                {searchTerm.map((term) => {
                    return (
                        <div className="posts">
                            <div className="container">
                                <h3>{term.title}</h3>
                                <img id='thumbnails' src={term.thumbnail}></img>
                            </div>
                            <div className="box-comment">
                                <Comments />
                            </div>
                        </div>
                    )
                })}
            </>

        </div>
    )
}