// import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./app/store";
import { Provider } from 'react-redux';
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { cryptoApi } from './services/cryptoApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={cryptoApi}> */}
      <App />
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>
);