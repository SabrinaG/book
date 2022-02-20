import { createSelector } from '@reduxjs/toolkit';

const booksSelector = state => state.books;

export const selectBooksList = createSelector(booksSelector, books => books.booksList);

export const selectBooksCount = createSelector(booksSelector, books => books.booksCount);

export const selectBooksLoadingStatus = createSelector(booksSelector, books => books.isLoading);

export const selectBooksErrorStatus = createSelector(booksSelector, books => books.error);