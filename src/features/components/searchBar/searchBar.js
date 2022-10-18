import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./searchBar.css";



export function SearchBar() {
    const [search, setSearch] = useState('')

    /// Do I need to create another slice for the search bar ?



    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setSearch(search);
    }, [search])

    const submitSearch = (e) => {
        e.preventDefault();
        //dispatch
    }

    //Got stuck on how to submit the search

    return (
        <div className="form-outline">
            <div className="img-container">
                <img src='./reddit.png' id='icon' />
            </div>
            <label className="form-label" htmlFor="form1">Search in Reddit:</label>
            <input type="search" id="form1" className="form-control" onChange={handleSearch} />
            <button className="btn btn-primary" onSubmit={submitSearch}>Search</button>
        </div>
    )
}