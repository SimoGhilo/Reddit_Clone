import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchComments, selectComments, togglePostComment } from "./postSlice";
import './comments.css';


export const Comments = (props) => {


    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    let { post } = props;
    let showComment = post.showComment;
    //let { post } = props;
    //let post = props.post;
    //console.log(post.id)  //Stuck here
    //console.log(comments); //Stuck here

    //const [showComment, setShowComment] = useState(true);
    //Calculate the date now in seconds 


    var seconds = new Date().getTime() / 1000;

    useEffect(() => {
        if (showComment) {
            console.log('Found comment', post.id);
            dispatch(fetchComments(post.permalink));
        }
    }, []);


    const handlePostComment = (id) => {
        //console.log('Logging post comment id', id);

        //dispatch(fetchComments(post.permalink));
        //setShowComment(!showComment);
        dispatch(togglePostComment(id));

    }

    console.log(comments)
    return (
        <>
            <h6 onClick={() => handlePostComment(post.id)}>Comments</h6>
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