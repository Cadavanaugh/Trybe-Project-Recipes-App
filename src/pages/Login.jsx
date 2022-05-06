import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import linguini from '../images/linguini.png';
import plate from '../images/ratatouille logo placa.png';
import emptyLogo from '../images/ratatouille logo removebg.png';
import style from '../styles/Login.module.css';

function Login() {
  const {
    user,
    handleChangeUser,
    validateUser,
    handleClickUser,
  } = useContext(LoginContext);
  const { email, password } = user;

  return (
    <div className={ style.login }>
      <form className={ style.container }>
        <div className={ style.logo }>
          <img src={ emptyLogo } alt="Ratatouille logo" />
          <h1>Recipes App</h1>
          <input
            type="email"
            id="inputEmail"
            placeholder="E-mail:"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ handleChangeUser }
          />
        </div>
        <div className={ style.input }>
          <img src={ plate } alt="Yellow plate" className={ style.placa } />
          <input
            type="password"
            id="inputPassword"
            placeholder="Password:"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ handleChangeUser }
          />
        </div>
        <div className={ style.input }>
          <img src={ plate } alt="Yellow plate" className={ style.placa } />
          <button
            type="submit"
            data-testid="login-submit-btn"
            disabled={ validateUser() }
            onClick={ handleClickUser }
          >
            Login
          </button>
        </div>
      </form>
      <img src={ linguini } alt="Linguini" />
    </div>
  );
}

export default Login;
