import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import style from '../styles/Profile.module.css';
import remy from '../images/remy.png';

function Profile() {
  const history = useHistory();

  const handleClickProfile = () => {
    localStorage.clear();
    history.push('/');
  };

  const getEmail = JSON.parse(localStorage.getItem('user'));
  console.log(getEmail);

  return (
    <div className={ style.container }>
      <Header pageTitle="Profile" showSearchButton />
      <h2
        data-testid="profile-email"
      >
        {getEmail?.email}
      </h2>
      <div className={ style['button-container'] }>
        <button
          className={ style.button }
          data-testid="profile-done-btn"
          type="submit"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          className={ style.button }
          data-testid="profile-favorite-btn"
          type="submit"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          className={ style.button }
          data-testid="profile-logout-btn"
          type="submit"
          onClick={ () => handleClickProfile() }
        >
          Logout
        </button>
      </div>
      <img src={ remy } alt="Remy with a spoon" className={ style.remy } />
      <Footer />
    </div>
  );
}

export default Profile;
