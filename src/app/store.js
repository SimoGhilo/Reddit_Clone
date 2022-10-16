import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subredditSliceReducer from '../features/components/subreddits/subredditSlice';
import mainPageSliceReducer from '../features/components/mainPage/mainPageSlice';


export const store = configureStore({
    reducer: combineReducers({
        subreddit: subredditSliceReducer,
        mainPage: mainPageSliceReducer
    })
});
