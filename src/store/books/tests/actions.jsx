/* eslint-disable import/no-extraneous-dependencies */
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchBooksData from '../actions';
import { BooksApiPaths } from '../../../assets/constants';

describe('books.actions tests', () => {
  let store;
  let getAction;

  const middleware = [thunk];
  const createMockStore = configureMockStore(middleware);
  
  const configureTestStore = (initialState = {}) => {
    const store = createMockStore(initialState);
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
  
    return store;
  }

  const filterAction = (store) => {
    return ({ type }) => store.getActions().find(a => a.type === type);
  }

  beforeEach(() => {
    store = configureTestStore({ books: { isLoading: false } });
    getAction = filterAction(store);
  });

  it('fetchBooksData when success - Should create actions: loading, successful', async () => {
    nock(`${BooksApiPaths.API_URL}`)
      .post(`:${BooksApiPaths.API_PORT}/${BooksApiPaths.API_ENDPOINT}`)
      .reply(200, {});

    await store.dispatch(fetchBooksData());

    expect(getAction(fetchBooksData.pending)).toBeTruthy();
    expect(getAction(fetchBooksData.fulfilled)).toBeTruthy();
    expect(getAction(fetchBooksData.rejected)).toBeFalsy();
  });

  it('fetchBooksData when failure - Should create actions: loading, failure', async () => {
    nock(`${BooksApiPaths.API_URL}`)
      .post(`:${BooksApiPaths.API_PORT}/${BooksApiPaths.API_ENDPOINT}`)
      .reply(404);

    await store.dispatch(fetchBooksData());

    expect(getAction(fetchBooksData.pending)).toBeTruthy();
    expect(getAction(fetchBooksData.fulfilled)).toBeFalsy();
    expect(getAction(fetchBooksData.rejected)).toBeTruthy();
  });
});
