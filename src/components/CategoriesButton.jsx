import React from 'react';
import PropTypes from 'prop-types';

function CategoriesButton({ strCategory }) {
  return (
    <button
      data-testid={ `${strCategory}-category-filter` }
      type="button"
    >
      {strCategory}
    </button>
  );
}

CategoriesButton.propTypes = {
  strCategory: PropTypes.string.isRequired,
};

export default CategoriesButton;
