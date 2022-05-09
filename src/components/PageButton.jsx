import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import style from '../styles/PageButton.module.css';

function PageButton({ targetPageTitle, routePath, dataTestId }) {
  const history = useHistory();
  return (
    <button
      className={ style.button }
      type="button"
      data-testid={ dataTestId }
      value={ targetPageTitle }
      onClick={ () => history.push(`${routePath}`) }
    >
      {targetPageTitle}
    </button>
  );
}

PageButton.propTypes = {
  targetPageTitle: PropTypes.string,
  routePath: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default PageButton;
