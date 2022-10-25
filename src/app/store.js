import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subredditSliceReducer from '../features/components/subreddits/subredditSlice';
import postSliceReducer from '../features/components/posts/postSlice';
import searchBarSlice from '../features/components/searchBar/searchBarSlice';



export const store = configureStore({
    reducer: combineReducers({
        subreddit: subredditSliceReducer,
        posts: postSliceReducer,
        comments: postSliceReducer,
        search: searchBarSlice
    })
});
