import { createSlice } from "@reduxjs/toolkit";
import { getSubRedditPosts } from "../API/api";

const initialState = {
    posts: [],
    error: false,
    isLoading: false
}

const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState: initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetSubRedditPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubRedditPostsSuccess(state) {
            state.isLoading = false;
            state.posts = action.payload
        },
        getSubRedditPostsError(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
})

///export actions 

export const {
    startGetSubRedditPosts,
    getSubRedditPostsSuccess,
    getSubRedditPostsError,
    setPosts
} = mainPageSlice.actions;

/// reducers export

export default mainPageSlice.reducer;

///selector export

export const selectPosts = (state) => state.posts.posts // ???? posts.posts or state.posts ?


/// Thunk export that dispatches actions

export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(startGetSubRedditPosts());
        const posts = await getSubRedditPosts();
        dispatch(getSubRedditPostsSuccess());
    } catch (err) {
        dispatch(getSubRedditPostsError());
    }
}