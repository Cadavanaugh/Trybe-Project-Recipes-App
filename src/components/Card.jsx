import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ img, name, index, path }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <Link exact="true" to={ path }>
        <img
          src={ img }
          alt={ name }
          width="100px"
          data-testid={ `${index}-card-img` }
        />
      </Link>
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default Card;
