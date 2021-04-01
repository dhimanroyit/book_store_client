import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from '../layout/Header/Header';
import Admin from '../pages/Admin/Admin';
import Home from '../pages/Home/Home';
import './App.css';
import { useRouteMatch } from 'react-router-dom';

function App() {
  const matchAdminRoute = useRouteMatch("/admin");
  
  return (
    <>
      { !matchAdminRoute && <Header />}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orders">
          <h1>Order page</h1>
        </Route>
        <Route path="/admin">
          <Admin />
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
    </>
  );
}

export default App;
