import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchComments, selectComments } from "./postSlice";
import './comments.css';


export const Comments = (props) => {


    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    let post = props.post;
    console.log(post.id)  //Stuck here
    console.log(comments); //Stuck here


    //Calculate the date now in seconds 

    var seconds = new Date().getTime() / 1000;

    useEffect(() => { dispatch(fetchComments(post.permalink)) }, [dispatch, post.permalink])
    // console.log(comments);
    return (
        <>
            {comments?.slice(0, 3).map((comment) => {
                return (
                    <div className="comments">
                        <div className="body">
                            <h5><small>{comment.body}</small></h5>
                        </div>
                        <p>{comment.author}</p>
                        <p>{Math.round((seconds - post.created_utc) / 6000)} Hours ago</p>
                    </div>
                )
            })}
        </>
    )
}