import React from 'react';
import { selectCategories } from '../subredditSlice';
import { useSelector } from 'react-redux';


export const Categories = () => {

    const categories = useSelector(selectCategories);


    return (
        <div>
            <ul>
                {categories.map((category) => <li>{category}</li>)}
            </ul>
        </div>
    )
}