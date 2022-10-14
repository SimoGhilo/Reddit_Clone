import React from 'react';
import { useState } from 'react';

export const AskReddit = () => {

    const [data, setData] = useState([])

    const url = "https://api.reddit.com/r/AskReddit.json";

    async function getData() {
        await fetch(url).then(response => response.json()).
            then(result => { setData(result); });
    }

    return (<>
        <button onClick={getData}>GetData</button>
        <h2>ask reddit</h2>
        <p></p>
    </>)


}