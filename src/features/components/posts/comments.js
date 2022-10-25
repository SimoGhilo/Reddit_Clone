import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchComments, selectComments } from "./postSlice";


export const Comments = () => {


    const dispatch = useDispatch();
    const comments = useSelector(selectComments);

    console.log(comments);

    //Calculate the date now in seconds 

    var seconds = new Date().getTime() / 1000;

    useEffect(() => { dispatch(fetchComments()), [dispatch] }) ///Error here

    return (
        <>
            {comments.map((comment) => {
                return (
                    <div className="comments">
                        <p>{comment.author}</p>
                        <p>{(seconds - comment.created_utc) / 60} Hours ago</p>
                        <img src="./chat.png" alt="chat"></img>
                    </div>
                )
            })}
        </>
    )
}