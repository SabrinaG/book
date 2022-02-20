import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { AppProvider } from './context/AppContext';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import createStore from './store';
import './index.css';

const store = createStore();
const history = createBrowserHistory();
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}  history={history}>
    <React.StrictMode>
      <App>
        <AppProvider>
          <Home/> 
        </AppProvider>
      </App>
    </React.StrictMode>,
  </Provider>,
  root,
);