import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./searchBar.css";



export function SearchBar() {

    const handleSearch = (e) => e.target.value;


    return (
        <div className="form-outline">
            <div className="img-container">
                <img src='./reddit.png' id='icon' />
            </div>
            <label className="form-label" htmlFor="form1">Search in Reddit:</label>
            <input type="search" id="form1" className="form-control" onChange={handleSearch} />
            <Link to='/subreddit'>SUb reddit</Link>
            <Link to='/'>Main page</Link>
        </div>
    )
}