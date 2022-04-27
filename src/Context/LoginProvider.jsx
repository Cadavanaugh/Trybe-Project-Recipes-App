import React from 'react';
import PropTypes from 'prop-types';
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
