import PropTypes from 'prop-types';
import React from 'react';
import style from '../styles/Header.module.css';
import ProfileButton from './ProfileButton';
import SearchButton from './SearchButton';

function Header({ pageTitle, showSearchButton }) {
  return (
    <header>
      <div className={ style.profile }>
        <ProfileButton />
        <p>jovanecastro12@gmail.com</p>
      </div>
      <div className={ style.search }>
        <h1 data-testid="page-title">{pageTitle}</h1>
        {!showSearchButton ? <SearchButton /> : null}
      </div>
    </header>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  showSearchButton: PropTypes.bool,
};

Header.defaultProps = {
  showSearchButton: false,
};

export default Header;
