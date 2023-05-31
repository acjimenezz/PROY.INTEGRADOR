import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer'


const store=createStore(reducer);
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

// ReactDOM.render(
 // <BrowserRouter>
//   <App />
//    </BrowserRouter>,
//   document.getElementById('root')
  
// ) --> esta es otra forma de renderizar

