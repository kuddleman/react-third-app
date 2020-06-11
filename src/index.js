import React from 'react';
import ReactDOM from 'react-dom';
import { Browser, Route } from 'react-router-dom'

import Posts from './components/Posts'
import Profile from './components/Profile'
import Home from './components/Home'
import Forms from './components/Forms'

const App = () => {
  return (
    <h1>routing</h1>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

