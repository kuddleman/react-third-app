import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Posts from './Posts'
import Profile from './Profile'
import Home from './Home'
import Forms from './Forms'

class Routing extends Component {

  render() {
    return (
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
      </BrowserRouter>
    )
  }
}

export default Routing