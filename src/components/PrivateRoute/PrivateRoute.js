import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import { signInContext } from '../../context/SignInContext';

function PrivateRoute({children, ...rest}) {
  const {signInUser} = useContext(signInContext);
  return (
    <Route
      {...rest} 
      render={({location}) => signInUser.signIn ? (
        children
      ) : (
        <Redirect to={{
          pathname: "/signin",
          state: {from: location}
        }} />
      )}
    />
  )
}

export default PrivateRoute
