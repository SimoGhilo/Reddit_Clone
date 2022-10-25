import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../API/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
}

export const fetchSubreddits = createAsyncThunk('subreddits/getSubreddits',
    async () => {
        const response = await fetch(`https://www.reddit.com/subreddits.json`);
        const json = await response.json();
        console.log(json);

        return json.data.children.map((subreddit) => subreddit.data)
    });

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState: initialState,
    reducers: {
        /*   startGetSubreddits(state) {
               state.isLoading = true;
               state.error = false;
           },
           getSubredditsSuccess(state, action) {
               state.isLoading = false;
               state.subreddits = action.payload;
           },
           getSubredditsError(state) {
               state.isLoading = false;
               state.error = true;
           } */
    },
    extraReducers: {
        [fetchSubreddits.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.subreddits = action.payload;
        },
        [fetchSubreddits.error]: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});



export default subRedditSlice.reducer;



export const selectSubReddits = (state) => state.subreddit.subreddits

export const selectCategories = (state) => {
    var categories = state.subreddit.subreddits.map((data) => { console.log(data.subreddit_name_prefixed); return data.subreddit_name_prefixed });
    //console.log(categories);
    let unique = [...new Set(categories)];
    return unique;
}

/// state.subreddits.subreddits or state.subreddits ???

///Thunk that dispatches actions








