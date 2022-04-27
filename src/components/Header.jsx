import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ pageTitle }) {
  const history = useHistory();
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div>
      <img
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="Profile Icon"
        onClick={ () => history.push('/profile') }
        aria-hidden="true"
      />
      <h1 data-testid="page-title">{pageTitle}</h1>
      <img
        type="button"
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="Search Icon"
        onClick={ () => setShowSearchBar(!showSearchBar) }
        aria-hidden="true"
      />
      { showSearchBar && <SearchBar />}
      <div />
    </div>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
