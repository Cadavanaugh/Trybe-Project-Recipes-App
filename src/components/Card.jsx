import React from 'react';
import PropTypes from 'prop-types';

function Card({ img, name, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` } className="card">
      <img src={ img } alt={ name } width="100px" data-testid={ `${index}-card-img` } />
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
