import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import manageBuilding from './reducers/manageBuilding'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(manageBuilding, applyMiddleware(thunk))
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
 </BrowserRouter>,
document.getElementById('root')
)
