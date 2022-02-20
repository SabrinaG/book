import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export const useAppDefaultContext = () => {
  const [inputSearchFilters, setInputSearchFilters] = useState([]);

  return {
    inputSearchFilters,
    setInputSearchFilters,
  };
};

export const AppProvider = ({ children }) => {
  const context = useAppDefaultContext();
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AppContext;
export const useAppContext = () => useContext(AppContext);
