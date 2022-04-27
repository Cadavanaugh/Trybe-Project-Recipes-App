import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const validateUser = () => {
    const { email, password } = user;
    const six = 6;
    const validEmail = /\w+@\w+(.com)/g;
    let buttonValidate = true;
    if (validEmail.test(email) && password.length > six) {
      buttonValidate = false;
    } return buttonValidate;
  };

  return (
    <div>
      <LoginContext.Provider value={ { user, handleChangeUser, validateUser } }>
        { children }
      </LoginContext.Provider>
    </div>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
