import React, { Component } from 'react';
import { Route, NavLink, Link, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchControl from './components/Controls/SearchControl';
import RecipeSearchDisplay from './components/RecipeSearchDisplay/RecipeSearchDisplay';
import DetailDisplay from './components/DetailDisplay/DetailDisplay';
import './App.css';

class App extends Component {

  render() {
    // const eitherPath = '/' || '/recipe-search'

    return (
      <div className="App">
        <Header />
        {/* <Route exact path={eitherPath} component={SearchControl} /> */}
        <Route exact path='/' component={SearchControl} />
        <Route exact path='/recipe-search' render={ () =>
          <div>
            <SearchControl />
            <RecipeSearchDisplay />
          </div> }/>
        <Route exact path='/recipe-details/:recipeId' component={DetailDisplay} />
      </div>
    );
  }
}

export default App;
