import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./css/index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import allReducer from "./reducers/index";
import Cookies from "universal-cookie"

import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import promise from 'redux-promise';

// defaults to localStorage for web
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage
};

const cookies = new Cookies();

const persistedReducer = persistReducer(persistConfig, allReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk, promise))
);
let persistor = persistStore(store);

// Must check for session

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default cookies;
