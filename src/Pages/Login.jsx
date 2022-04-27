import React, { useContext } from 'react';
import LoginContext from '../Context/LoginContext';

function Login() {
  const {
    user,
    handleChangeUser,
    validateUser,
  } = useContext(LoginContext);
  const { email, password } = user;

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="inputEmail">
        Email:
        { ' ' }
        <input
          type="email"
          id="inputEmail"
          placeholder="Type here your e-mail"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ handleChangeUser }
        />
      </label>
      Password:
      { ' ' }
      <label htmlFor="inputPassword">
        <input
          type="password"
          id="inputPassword"
          placeholder="Type here your password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ handleChangeUser }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ validateUser() }
        >
          Enter
        </button>
      </label>
    </div>
  );
}

export default Login;
