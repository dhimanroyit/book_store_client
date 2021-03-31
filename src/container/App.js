import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../layout/Header/Header';
import Home from '../pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
        <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orders">
          <h1>Order page</h1>
        </Route>
        <Route path="/admin">
          <h1>admin page</h1>
        </Route>
        <Route path="/deals">
          <h1>deals page</h1>
        </Route>
        <Route path="/signin">
          <h1>signin page</h1>
        </Route>
        <Route path="/signup">
          <h1>signup page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
