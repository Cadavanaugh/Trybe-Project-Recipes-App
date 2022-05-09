import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import style from '../styles/ProfileButton.module.css';

function ProfileButton() {
  const history = useHistory();
  return (
    <div>
      <img
        className={ style.profileIMG }
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
