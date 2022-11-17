import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchComments, selectComments, togglePostComment, selectCurrentPost } from "./postSlice";
import './comments.css';


export const Comments = (props) => {


    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const currentPostId = useSelector(selectCurrentPost);
    let { post } = props;


    var seconds = new Date().getTime() / 1000;



    const handlePostComment = (id, permalink) => {
        let same = id == currentPostId;
        dispatch(togglePostComment(id));
        if (!same) {
            dispatch(fetchComments(permalink));
        }

    }


    return (
        <>
            <h6 onClick={() => handlePostComment(post.id, post.permalink)}>Comments</h6>
            {currentPostId == post.id && comments?.slice(0, 3).map((comment) => {
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