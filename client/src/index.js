import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// use Provider from redux to let the app know we have to use google auth using the store configueration & custom reducers 
import { Provider } from 'react-redux'; // use the configurations from the provider function in redux
import store from "./app/store"; // use the configurations inside store.jsx

ReactDOM.render(
  <Provider store={store}> {/*provider has a store attribute which should use/poing to the custom store developed*/ }
    <App />
  </Provider>,
  document.getElementById('root')
);
