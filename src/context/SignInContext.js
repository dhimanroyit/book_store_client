import React, { useState ,createContext} from 'react';

export const signInContext = createContext();



const SignInContextProvider = ({children}) => {
  const [signInUser, setSignInUser] = useState(
    {
      signIn: false,
      name: '',
      email: '',
      photo: '',
    }
  );
  const signInData = {
    signInUser,
    setSignInUser
  }
  return (
    <signInContext.Provider value={signInData}>
      {children}
    </signInContext.Provider>
  )
}

export default SignInContextProvider;

