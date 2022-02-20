/* eslint-disable import/no-extraneous-dependencies */
import nock from 'nock';
import { queryBooksData } from '../services';
import { BooksApiPaths } from '../../../assets/constants';

const booksServicesTestSuite = () => describe('books.services tests', () => {
  beforeEach(() => {
  });

  afterEach(() => {
    nock.cleanAll();
  });


  it('queryBooksData - should query books data', () => {
    const testPageNum = 1;
    const testNumbOfitemsPerPage = 20;
    const testSearchFilters = [];

    nock(`${BooksApiPaths.API_URL}`)
      .post(`:${BooksApiPaths.API_PORT}/${BooksApiPaths.API_ENDPOINT}`)
      .reply(200, {});

    return queryBooksData(testPageNum, testNumbOfitemsPerPage, testSearchFilters).then((data) => {
      expect(data).toEqual({});
    });
  });
});

export { booksServicesTestSuite as default };
