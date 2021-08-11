import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import dotenv from 'dotenv'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import generatorStore from './redux/store'

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'

let store = generatorStore()

ReactDOM.render(
  <Provider store={store}> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

