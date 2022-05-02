import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
// import { fetchDrinkById } from '../services/fetchFoodsAndDrinks';

function DrinksInProgress() {
  const { drinks } = useContext(RecipesContext);
  const { idReceita } = useParams();
  console.log(drinks);
  const cockTail = (drinks.filter((drink) => drink.idDrink === idReceita));
  console.log(cockTail);
  if (cockTail === null || cockTail === undefined || cockTail.length === 0) {
    return null;
  }
  // const dois = 2;
  console.log(cockTail[0]?.strDrinkThumb);
  // console.log(cockTail[0].strDrinkThumb);
  if (cockTail[0] === undefined) {
    console.log(cockTail);
  }
  // const [ingredientList, setIngredientList] = useState([]);

  // const ingredientCard = () => {
  //   setIngredientList(fetchDrinkById());
  // };
  // const index = 1;
  return (
    <>

      <img
        data-testid="recipe-photo"
        src={ cockTail[0].strDrinkThumb }
        alt={ cockTail[0].strDrink }
        width="100px"
      />
      <h2
        data-testid="recipe-title"
      >
        { cockTail[0].strDrink }
      </h2>

      <div>
        <p data-testid="recipe-category">{ cockTail[0]?.strCategory }</p>
        <button
          type="button"
          // onClick={ () => history.push('/') }
        >
          <img data-testid="share-btn" src={ shareIcon } alt="share-button" />
        </button>
        <button
          type="button"
          // onClick={ () => history.push('/') }
        >
          <img data-testid="favorite-btn" src={ blackHeartIcon } alt="favorite-button" />
        </button>

      </div>

      {/* <h3>Ingredients</h3>
      <section>
        <label htmlFor="ingredient-1" data-testid={ `${index}-ingredient-step` }>
          <input type="checkbox" id="ingredient-1" />
          { cockTail[0]?.strIngredient1 }
        </label>
        <br />
        <label htmlFor="ingredient-2">
          <input type="checkbox" id="ingredient-2" />
          { cockTail[0]?.strIngredient2 }
        </label>
        <br />
        <label htmlFor="ingredient-3">
          <input type="checkbox" id="ingredient-3" />
          { cockTail[0]?.strIngredient3 }
        </label>
      </section>
      <h3>Instructions</h3> */}
      {/* <section>
        { for( let index = 1; cockTail[0]?.strIngredient[index] !== null; index += 1 ) {
          <>
            <label htmlFor=`ingredient-${index}` data-testid={ `${index}-ingredient-step` }>
              <input type="checkbox" id="ingredient-1" />
              cockTail[0]?.strIngredient1
            </label>
            <br />
          </>
        }
        }
      </section> */}
      <div>
        {/* { cockTail.length
          ? cockTail
            .forEach((element, index = 1) => (element.strIngredient`${index}` !== null
              ? <p>{element
              .strIngredient`${index}`}</p> : <p>teste</p>)) : <p>teste2</p>} */}
        {/* {/* { cockTail[0]?.strIngredient1 } */}
      </div>
      {/* {(() => {
        for (let index = 1; index <= quinze; index += 1) {
          <p>{ console.log(cockTail[0][`strIngredient${index}`])}</p>;
        }
      })()} */}
      {/* <p>{ cockTail[0].strIngredient2 }</p>
      <p>{ cockTail[0].strIngredient3 }</p> */}

      {/* {[...Array(quinze)].map((x, i) => (
        <p>
          cockTail[0][`strIngredient$
          {i}
          `]
        </p>))} */}
      {/* <p>
        { cockTail[0].strIngredient1 }
      </p> */}
      {/* <h1>{ ingredientList }</h1> */}
      <p>
        {/* { cockTail[0].strIngredient1 }
        { cockTail[0].strIngredient2 }
        { cockTail[0].strIngredient3 } */}
      </p>
    </>
  );
}

export default DrinksInProgress;
