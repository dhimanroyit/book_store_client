import React from 'react';
import { Switch, Route} from 'react-router-dom';
import 'firebase/auth';
import Header from '../layout/Header/Header';
import Admin from '../pages/Admin/Admin';
import Home from '../pages/Home/Home';
import { useRouteMatch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'
import Checkout from '../pages/Checkout/Checkout';
import SignIn from '../pages/SignIn/SignIn';
import firebaseInit from '../config/firebase/firebaseInit';
import SignInContextProvider from '../context/SignInContext';
import './App.css';
import Order from '../pages/Order/Order';

firebaseInit();

function App() {
  const matchAdminRoute = useRouteMatch("/admin");
  
  return (
    <SignInContextProvider>
      { !matchAdminRoute && <Header />}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/orders">
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/deals">
          <h1>deals page</h1>
        </Route>
        <PrivateRoute path="/checkout/:productId">
          <Checkout />
        </PrivateRoute>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <h1>signup page</h1>
        </Route>
      </Switch>
    </SignInContextProvider>
  );
}

export default App;
