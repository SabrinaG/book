import sinon from 'sinon';
import booksactionsTestSuite from './store/books/tests/actions';
import booksservicesTestSuite from './store/books/tests/services';

describe('sequentially run store tests', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  booksactionsTestSuite();
  booksservicesTestSuite();
});
