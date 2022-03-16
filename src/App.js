import React, { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Blogs from "./components/Blogs/Blogs";
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import BlogPosts from "./components/Blogposts/BlogPosts";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <div>
          <Navigation />
          <Switch>
              <Route exact path='/'>
                  <Homepage />
              </Route>
              <Route path='/login'>
                  <Login isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
              </Route>
              <Route exact path='/blogs'>
                  <Blogs />
              </Route>
              <Route  path='/blog/:id'>
                  <BlogPosts />
              </Route>
          </Switch>
      </div>
  )
}

export default App;
