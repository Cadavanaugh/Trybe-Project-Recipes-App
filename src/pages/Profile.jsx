import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const history = useHistory();

  const handleClickProfile = () => {
    localStorage.clear();
    history.push('/');
  };

  const getEmail = JSON.parse(localStorage.getItem('user'));
  console.log(getEmail);

  return (
    <>
      <Header pageTitle="Profile" showSearchButton />
      <div>
        <h2
          data-testid="profile-email"
        >
          {getEmail?.email}
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
