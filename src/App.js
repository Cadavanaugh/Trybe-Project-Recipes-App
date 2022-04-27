import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Foods from './components/Foods';
import Login from './components/Login';
import Drinks from './components/Drinks';
import Explore from './components/Explore';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
