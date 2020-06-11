import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Posts from './components/Posts'
import Profile from './components/Profile'
import Home from './components/Home'
import Forms from './components/Forms'

// const App = () => {
//   return (
//     <h1>routing</h1>
//   )
// }

ReactDOM.render(
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/forms">Forms</Link>
      </header>
      <Route exact path="/" component={ Home }></Route>
      <Route path="/posts" component={ Posts }></Route>
      <Route path="/profile" component={ Profile }></Route>
      <Route path="/forms" component={ Forms }></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

