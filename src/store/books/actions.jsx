import { createAsyncThunk } from '@reduxjs/toolkit';
import queryBooksData from './services';

export const fetchBooksData = createAsyncThunk(
  'FETCH_BOOKS_DATA',
  async ({ pageNum, numbOfitemsPerPage, searchFilters }) => queryBooksData(pageNum, numbOfitemsPerPage, searchFilters),
);

export default fetchBooksData;
