import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import manageBuilding from './reducers/manageBuilding'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// 
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }
//
// function Create() {
//   return (
//     <div>
//       <h2>Create</h2>
//     </div>
//   );
// }

const store = createStore(manageBuilding)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
