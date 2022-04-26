import React from 'react';

function Login() {
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
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </label>
    </div>
  );
}

export default Login;
