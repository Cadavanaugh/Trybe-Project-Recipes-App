import React from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import ProfileButton from './ProfileButton';

function Header({ pageTitle, showSearchButton }) {
  return (
    <div>
      <ProfileButton />
      <h1 data-testid="page-title">{pageTitle}</h1>
      {
        !showSearchButton ? <SearchButton /> : null
      }
      <div />
    </div>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  showSearchButton: PropTypes.bool.isRequired,
};

export default Header;
