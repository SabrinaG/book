import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import { selectBooksLoadingStatus } from '../../store/books/selectors';
import './Layout.css';

const Layout = () => {
  const isLoading = useSelector(selectBooksLoadingStatus);

  return (
    <div className="Panel">
      <div className="Header">
        <Header />
      </div>
      <div className="Content">
        {isLoading ? <i className="fas fa-spinner fa-spin" /> : <List />
        }
      </div>
    </div>
  );
}

export default Layout;
