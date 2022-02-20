import { selectBooksList, selectBooksCount, selectBooksLoadingStatus, selectBooksErrorStatus } from '../selectors';

describe('books.selectors tests', () => {
  const state = {
    books: {
      booksList: [{
        "id":2086,
        "book_author":["Ανώνυμος"],
        "book_title":"Ο Αλέξανδρος ο Μακεδών",
        "book_publication_year":1529,
        "book_publication_country":"Ιταλία",
        "book_publication_city":"Βενετία",
        "book_pages":104
      }],
      booksCount: 1,
      isLoading: false,
      error: undefined,
    },
  };

  it('selectBooksList - should select booksList', () => {
    expect(selectBooksList(state)).toBe([{
      "id":2086,
      "book_author":["Ανώνυμος"],
      "book_title":"Ο Αλέξανδρος ο Μακεδών",
      "book_publication_year":1529,
      "book_publication_country":"Ιταλία",
      "book_publication_city":"Βενετία",
      "book_pages":104},
    ]);
  });

  it('selectBooksCount - should select booksCount', () => {
    expect(selectBooksCount(state)).toBe(1);
  });

  it('selectBooksLoadingStatus - should select isLoading', () => {
    expect(selectBooksLoadingStatus(state)).toBe(false);
  });

  it('selectBooksErrorStatus - should select error', () => {
    expect(selectBooksErrorStatus(state)).toBe(undefined);
  });
});
