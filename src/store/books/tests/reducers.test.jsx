import { createAction } from '@reduxjs/toolkit';
import fetchBooksData from '../actions';
import reducers from '../reducers';

describe('books.reducers tests', () => {
  describe('fetchBooksData', () => {
    it('should do nothing on pending', () => {
      const pending = createAction(fetchBooksData.pending);
      expect(reducers({}, pending())).toEqual({});
    });

    it('should add the user info to the store', () => {
      const apiResult = {
        "books": [
          {
            "id":2086,
            "book_author":["Ανώνυμος"],
            "book_title":"Ο Αλέξανδρος ο Μακεδών",
            "book_publication_year":1529,
            "book_publication_country":"Ιταλία",
            "book_publication_city":"Βενετία",
            "book_pages":104
          },
        ],
        "count": 2425
      }

      const fulfilled = createAction(fetchBooksData.fulfilled);
      expect(reducers({}, fulfilled(apiResult))).toEqual({
        booksList: apiResult.books,
        booksCount: apiResult.count,
        isLoading: false,
      });
    });

    it('should add pending to state', () => {
      const pending = createAction(fetchBooksData.pending);
      expect(reducers({}, pending())).toEqual({ isLoading: true });
    });

    it('should add error to state', () => {
      const error = { code: 123, message: 'Whoops!' };

      const rejected = createAction(fetchBooksData.rejected);
      expect(reducers({}, rejected(error))).toEqual({ isLoading: false, error });
    });
  });

  it('Default - If action is unknown, the state should be unchanged', () => {
    const unknownAction = {
      type: 'UNKNOWN_ACTION',
    };

    expect(reducers({}, unknownAction)).toEqual({});
  });
});
