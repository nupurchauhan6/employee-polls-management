import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import reducer from "./reducers";
import logger from './middleware/logger';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({ reducer: reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
