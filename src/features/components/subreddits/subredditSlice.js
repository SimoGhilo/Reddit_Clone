import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../API/api";

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
}

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState: initialState,
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditsSuccess(state) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubredditsError(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
});

///action exports

export const {
    startGetSubreddits,
    getSubredditsSuccess,
    getSubredditsError
} = subRedditSlice.actions;

///reducers exports

export default subRedditSlice.reducer;

///selector exports

export const selectSubReddits = (state) => state.subreddits.subreddits  /// state.subreddits.subreddits or state.subreddits ???

///Thunk that dispatches actions

export const fetchSubreddits = () => {
    async (dispatch) => {
        try {
            dispatch(startGetSubreddits());
            const subreddits = await getSubreddits();
            dispatch(getSubredditsSuccess);
        } catch (err) {
            dispatch(getSubredditsError);
        }
    }
}





