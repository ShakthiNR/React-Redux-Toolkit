import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user' //userReducer is the name of reducers exported from userSlice and it can be any name
import themeReducer from "./features/theme" ////themeReducer is the name of reducers exported from themeSlice
//it holds all the states globally 
//have collection of reducers
//Reducer is function 
const store = configureStore(
  {
    reducer:{
      user:userReducer,
      theme: themeReducer
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


