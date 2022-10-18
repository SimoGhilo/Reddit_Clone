import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subredditSliceReducer from '../features/components/subreddits/subredditSlice';



export const store = configureStore({
    reducer: combineReducers({
        subreddit: subredditSliceReducer,
    })
});
