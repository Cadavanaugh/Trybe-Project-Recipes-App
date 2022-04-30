/* eslint-disable react/prop-types */
import React from 'react';
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

export default PageButton;
