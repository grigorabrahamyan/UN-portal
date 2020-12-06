import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';

import store from './store';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/index.scss';
import './locale/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
