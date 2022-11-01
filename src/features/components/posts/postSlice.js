import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSubRedditPosts } from "../API/api";


const initialState = {
    posts: [],
    comments: [],
    error: false,
    isLoading: false,
}

export const fetchPosts = createAsyncThunk('posts/getPosts',
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
        const json = await response.json();

        return json.data.children.map((post) => post.data);
    });


//// Another thunk for fetching the comments 'https://www.reddit.com/r/comments/{postID}.json

export const fetchComments = createAsyncThunk('posts/getComments',
    async (permalink) => {
        const response = await fetch(`https://www.reddit.com/${permalink}.json`)
        const json = await response.json();
        console.log(json);
        return json[1].data.children.map((comment) => comment.data);
    });

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = false;
        },
        [fetchPosts.error]: (state) => {
            state.isLoading = false;
            state.error = true;
        },
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
            state.error = false;
        },
        [fetchComments.error]: (state) => {
            state.isLoading = false;
            state.error = true;
        },

    }
})

export default postsSlice.reducer;

export const selectPosts = (state) => state.posts.posts;
export const selectComments = (state) => state.comments.comments;
