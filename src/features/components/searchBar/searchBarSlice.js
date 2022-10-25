import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    search: [],
    error: false,
    isLoading: false
}


export const fetchSearchTerm = createAsyncThunk('search/fetchSearchTerm',
    async (searchTerm) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
        const json = await response.json();

        return json.data.children.map(searchTerm => searchTerm.data)
    })

const searchBarSlice = createSlice({
    name: 'searchBarSlice',
    initialState: initialState,
    extraReducers: {
        [fetchSearchTerm.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchSearchTerm.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.search = action.payload
        },
        [fetchSearchTerm.error]: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }

})

export default searchBarSlice.reducer;


export const selectSearchTerm = (state) => (state.search.search)