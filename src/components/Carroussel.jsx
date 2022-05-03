import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { seis } from '../services/variables';
import Card from './Card';
import RecipesContext from '../context/RecipesContext';
import style from '../styles/RecipeDetails.module.css';

export default function Carroussel({ recommended, foodsPath }) {
  const { pathname } = useContext(RecipesContext);
  const keyRecommended = pathname.includes('/foods') ? 'Drink' : 'Meal';
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <Slider { ...settings } className={ style.slick }>
      {
        recommended.slice(0, seis)
          .map((item, index) => (
            <Card
              key={ item[`id${keyRecommended}`] }
              name={ item[`str${keyRecommended}`] }
              img={ item[`str${keyRecommended}Thumb`] }
              index={ index }
              path={ foodsPath
                ? `/foods/${item[`id${keyRecommended}`]}`
                : `/drinks/${item[`id${keyRecommended}`]}` }
              testIDCard="recomendation"
              testIDTitle="recomendation-title"
            />
          ))
      }
    </Slider>
  );
}

Carroussel.propTypes = {
  recommended: PropTypes.object,
  foodsPath: PropTypes.bool,
}.isRequired;
