import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../Layout/Layout';
import { fetchBooksData } from '../../store/books/actions';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksData({ pageNum: 1, numbOfitemsPerPage: 20, searchFilters: [] }));
  }, []);

  return (
    <div className="Home">
      <Layout />
    </div>
  );
}

export default Home;
