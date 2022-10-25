import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./searchBar.css";
import { selectSearchTerm } from './searchBarSlice';



export function SearchBar() {

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    console.log(searchTerm);

    useEffect(() => { dispatch(searchTerm); }, [dispatch]);

    const handleSearch = (e) => {
        e.preventDefault();
        e.target.value
    }


    return (
        <div className="form-outline">
            <div className="img-container">
                <img src='./reddit_new.png' id='icon' />
            </div>
            <label className="form-label" htmlFor="form1">Search in Reddit: </label>
            <input type="search" id="form1" className="form-control" onChange={handleSearch} />
            <button className="btn btn-primary">Search</button>
        </div>
    )
}