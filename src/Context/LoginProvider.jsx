import React from 'react'
import LoginContext from './LoginContext'

function LoginProvider({ children }) {
  return (
    <div>
      <LoginContext.Provider value={ {algo} } >
        { children }
      </LoginContext.Provider>
  </div>
  );
}

export default LoginProvider;
