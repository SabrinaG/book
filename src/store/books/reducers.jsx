/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchBooksData from './actions';

const initialState = {
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooksData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.booksList = payload.books;
      state.booksCount = payload.count;
    }, 
    [fetchBooksData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooksData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default booksSlice.reducer;
