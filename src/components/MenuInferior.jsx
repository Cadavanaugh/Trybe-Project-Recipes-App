import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import style from './MenuInferior.module.css';

export default function MenuInferior() {
  return (
    <nav data-testid="footer" className={ style.navFooter }>
      <ul>
        <li data-testid="drinks-bottom-btn">
          <img src={ drinkIcon } alt="Drinks" />
        </li>
        <li data-testid="explore-bottom-btn">
          <img src={ exploreIcon } alt="Explore" />
        </li>
        <li data-testid="food-bottom-btn">
          <img src={ mealIcon } alt="Foods" />
        </li>
      </ul>
    </nav>
  );
}
