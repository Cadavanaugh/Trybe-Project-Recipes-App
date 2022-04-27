import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function ProfileButton() {
  const history = useHistory();
  return (
    <div>
      <img
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="Profile Icon"
        aria-hidden="true"
        onClick={ () => history.push('/profile') }
      />
    </div>
  );
}

export default ProfileButton;
