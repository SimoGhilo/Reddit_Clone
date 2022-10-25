import React from 'react';


export const Card = ({ post }) => {

    const { subreddit } = post;

    return (
        <div>
            <h3>{subreddit}</h3>
            <img />
            <p></p>
            <p></p>
        </div>
    )
}