import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [user, setUser] = useState({ email: '', password: '' });
  const history = useHistory();

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

  const handleClickUser = () => {
    const { email } = user;
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    history.push('/foods');
  };

  const store = {
    user,
    handleChangeUser,
    validateUser,
    handleClickUser,
  };

  return (
    <div>
      <LoginContext.Provider
        value={ store }
      >
        { children }
      </LoginContext.Provider>
    </div>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
