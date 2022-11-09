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

    let showComment = props.showComment;
    let setShowComment = props.setShowComment;
    //Calculate the date now in seconds 

    var seconds = new Date().getTime() / 1000;


    const togglePostComment = () => {
        dispatch(fetchComments(post.permalink))
    }
    return (
        <>
            <h6 onClick={() => togglePostComment()}>Comments</h6>
            {showComment && comments?.slice(0, 3).map((comment) => {
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