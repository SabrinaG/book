import { BooksApiPaths } from '../../assets/constants';

export const queryBooksData = (pageNum, numbOfitemsPerPage, searchFilters) => {
  return(
    fetch(`${BooksApiPaths.API_URL}:${BooksApiPaths.API_PORT}/${BooksApiPaths.API_ENDPOINT}`,
    {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Content-Length': '<calculated when request is sent>' },
        method: `${BooksApiPaths.API_METHOD}`,
        body: JSON.stringify({
          "page": pageNum,
          "itemsPerPage": numbOfitemsPerPage,
          "filters": searchFilters
        })
    })
    .then((response) => { return response.json(); })
    .catch((err) => { throw err; })
  )
};

export default queryBooksData;