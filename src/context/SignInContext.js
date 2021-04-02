import React, { useState ,createContext} from 'react';

export const signInContext = createContext();



const SignInProvider = ({children}) => {
  const [signIn, setSignIn] = useState(false);
  const signInData = {
    signIn,
    setSignIn
  }
  return (
    <signInContext.Provider value={signInData}>
      {children}
    </signInContext.Provider>
  )
}

export default SignInProvider;

