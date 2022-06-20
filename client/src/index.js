import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// let the app know we have use the google auth using the custome store & reducers 
import { Provider } from 'react-redux'; // user the configurations from the provider function in redux
import store from "./app/store"; // user the configurations inside store.jsx

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
