import PropTypes from 'prop-types';
import React from 'react';
import style from '../styles/Header.module.css';
import ProfileButton from './ProfileButton';
import SearchButton from './SearchButton';

function Header({ pageTitle, showSearchButton }) {
  return (
    <header className={ style.header }>
      <ProfileButton />
      <h1 data-testid="page-title">{pageTitle}</h1>
      {
        !showSearchButton ? <SearchButton /> : null
      }
    </header>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string,
  showSearchButton: PropTypes.bool,
}.isRequired;

export default Header;
