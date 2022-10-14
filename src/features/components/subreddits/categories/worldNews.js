import React from 'react';
import { useState, useEffect } from 'react';

const WorldNews = () => {

    const [data, setData] = useState({});

    const url = "https://api.reddit.com/r/worldnews.json";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setData(result))

    }, [data])


    return (
        <>
            {data.map(post => (
                <div key={post.id}>
                    <h5>{post.title}</h5>
                </div>
            ))}
        </>
    )
}
export default WorldNews;