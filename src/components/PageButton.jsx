import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function PageButton({ targetPageTitle, routePath, dataTestId }) {
  const history = useHistory();
  return (
    <div>
      <button
        type="button"
        data-testid={ dataTestId }
        value={ targetPageTitle }
        onClick={ () => history.push(`${routePath}`) }
      >

        <p>{targetPageTitle}</p>

      </button>
    </div>
  );
}

PageButton.propTypes = {
  targetPageTitle: PropTypes.string,
  routePath: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default PageButton;
