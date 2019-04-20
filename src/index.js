import React from 'react';
import ReactDOM from 'react-dom';
import AppItem from './App.js';
import { GlobalStyle } from './style'

const App = (
  <div>
    <GlobalStyle/>
    <AppItem/>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));