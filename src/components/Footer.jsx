import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.png';
import exploreIcon from '../images/exploreIcon.png';
import mealIcon from '../images/mealIcon.png';
import style from '../styles/Footer.module.css';

export default function Footer() {
  const history = useHistory();

  return (
    <nav data-testid="footer" className={ style.navFooter }>
      <ul>
        <li>
          <button
            type="button"
            title="Drinks"
            onClick={ () => history.push('/drinks') }
          >
            <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="Drinks" />
          </button>
        </li>
        <li>
          <button
            type="button"
            title="Explorar"
            onClick={ () => history.push('/explore') }
          >
            <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="Explore" />
          </button>
        </li>
        <li>
          <button
            type="button"
            title="Foods"
            onClick={ () => history.push('/foods') }
          >
            <img data-testid="food-bottom-btn" src={ mealIcon } alt="Foods" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
