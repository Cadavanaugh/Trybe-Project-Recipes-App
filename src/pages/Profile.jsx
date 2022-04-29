import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const history = useHistory();

  const handleClickProfile = () => {
    localStorage.clear();
    history.push('/');
  };

  const menosum = -1;
  return (
    <>
      <Header pageTitle="Profile" />
      <div>
        <h2
          data-testid="profile-email"
        >
          {(localStorage.getItem('user')).split('"').slice(1, menosum).pop('l')}
        </h2>
        <button
          data-testid="profile-done-btn"
          type="submit"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          data-testid="profile-favorite-btn"
          type="submit"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          type="submit"
          onClick={ () => handleClickProfile() }
        >
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
