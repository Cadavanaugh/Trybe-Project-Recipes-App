import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
// import DrinksIngredients from './pages/DrinksIngredients';
import DrinksInProgress from './pages/DrinksInProgress';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
// import FoodsIngredients from './pages/FoodsIngredients';
import FoodsInProgress from './pages/FoodsInProgress';
import Login from './pages/Login';
import Nationalities from './pages/ExploreNationalities';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import RecipesByIngredient from './pages/RecipesByIngredient';
// import RandomFoodPage from './pages/RandomFoodPage';
// import RandomDrink from './pages/RandomDrink';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/foods/:idReceita" component={ RecipeDetails } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/drinks/:idReceita" component={ RecipeDetails } />
        {/* <Route exact path="/surprise-food" component={ RandomFoodPage } /> */}
        {/* <Route exact path="/drinks/surprise-drink" component={ RandomDrink } /> */}
        <Route
          exact
          path="/foods/:idReceita/in-progress"
          component={ FoodsInProgress }
        />
        <Route
          exact
          path="/drinks/:idReceita/in-progress"
          component={ DrinksInProgress }
        />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/recipes-by-ingredient" component={ RecipesByIngredient } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodsIngredients }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ Nationalities }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default App;
