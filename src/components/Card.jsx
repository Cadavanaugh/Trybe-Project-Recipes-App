import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Card.module.css';

function Card({ img, name, index, path, testIDCard, testIDTitle }) {
  return (
    <div data-testid={ `${index}-${testIDCard}-card` } className={ style.componentCard }>
      <Link exact="true" to={ path }>
        <img
          src={ img }
          alt={ name }
          data-testid={ `${index}-card-img` }
        />
      </Link>
      <p data-testid={ `${index}-${testIDTitle}` }>{name}</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default Card;
