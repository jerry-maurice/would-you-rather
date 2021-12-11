import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { Auth0Provider } from "@auth0/auth0-react";

import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="would-you-rather.us.auth0.com"
      clientId=""
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
