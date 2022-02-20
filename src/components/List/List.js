import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { fetchBooksData } from '../../store/books/actions';
import { selectBooksList, selectBooksCount, selectBooksLoadingStatus } from '../../store/books/selectors';
import { useAppContext } from '../../context/AppContext';
import { BooksList } from '../../assets/constants';
import './List.css';

const columns = [
  { id: 'book_author', label: BooksList.HEADERS[1].toUpperCase(), minWidth: 100 },
  { id: 'book_title', label: BooksList.HEADERS[2].toUpperCase(), minWidth: 100 },
  { id: 'book_publication_year', label: BooksList.HEADERS[3].toUpperCase(), minWidth: 100 },
  { id: 'book_publication_country', label: BooksList.HEADERS[4].toUpperCase(), minWidth: 100 },
  { id: 'book_publication_city', label: BooksList.HEADERS[5].toUpperCase(), minWidth: 100 },
  { id: 'book_pages', label: BooksList.HEADERS[6].toUpperCase(), minWidth: 100 },
];

const List = () => {
  const context = useAppContext();
  const dispatch = useDispatch();

  const booksList = useSelector(selectBooksList);
  const booksCount = useSelector(selectBooksCount);
  const isLoading = useSelector(selectBooksLoadingStatus);

  const [rows, setRows] = useState(booksList || []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const reloadTableData = async (newPage, newNumbPerPage, newFilter) => {
    const [bookData] = await Promise.all([dispatch(fetchBooksData({ pageNum: newPage + 1, numbOfitemsPerPage: newNumbPerPage, searchFilters: newFilter }))]);
    setRows(bookData.books);
  }

  const handleSearchField = (event) => {
    const updateFilters = event.target.value ? [{ type: "all", values: [event.target.value]}] : [];
    context.setInputSearchFilters(updateFilters);
    reloadTableData(page, rowsPerPage, updateFilters);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    reloadTableData(newPage, rowsPerPage, context.inputSearchFilters);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(+page);
    reloadTableData(+page, +event.target.value, []);
  };

  return (
    <Fragment>
      <div className="Search">
        <TextField 
          disabled={isLoading}
          id="filled-basic" 
          label="Seach here" 
          variant="filled"
          onChange={handleSearchField}
        />
      </div>
      <div className="List">
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20, 50, 100]}
            component="div"
            count={booksCount || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </Fragment>
  );
}

export default List;
