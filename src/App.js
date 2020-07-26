import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import GithubState from './context/GithubState';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import User from './components/users/User';
import About from './components/pages/About';
import NoMatch from './components/pages/NoMatch';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <GithubState>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NoMatch} />
            </Switch>
          </GithubState>
        </div>
      </div>
    </Router>
  );
};

export default App;
