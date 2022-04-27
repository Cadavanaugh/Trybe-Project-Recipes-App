import PropTypes from 'prop-types';
import React from 'react';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  return (
    <div>
      <LoginContext.Provider>
        { children }
      </LoginContext.Provider>
    </div>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
