// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Drinks from './Pages/Drinks';
import Explore from './Pages/Explore';
import Foods from './Pages/Foods';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        {/* <Route exact path="/foods/{id-da-receita}" component={ FoodId }/>
          <Route exact path="/drinks/{id-da-receita}" component={ DrinkId } />
          <Route exact path="/foods/{id-da-receita}/in-progress" component={ FoodsInProgress }/>
          <Route
          exact path="/drinks/{id-da-receita}/in-progress"
          component={ DrinksInProgress }/> */}
        <Route exact path="/explore" component={ Explore } />
        {/* <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
          <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients }/>
          <Route
          exact path="/explore/foods/nationalities" component={ Nationalities } /> */}
        <Route exact path="/profile" component={ Profile } />
        {/* <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } /> */}
      </Switch>
    </div>
  );
}

export default App;
