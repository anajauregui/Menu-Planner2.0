import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchControl from './components/Controls/SearchControl';
import RecipeSearchDisplay from './components/RecipeSearchDisplay/RecipeSearchDisplay';
import DetailDisplay from './components/DetailDisplay/DetailDisplay';
import './App.css';

class App extends Component {

  render() {
    // const eitherPath = '/' || '/recipe-search'

    return (
      <div className='main-page'>
        <Header />
        {/* <Route exact path={eitherPath} component={SearchControl} /> */}
        <Route exact path='/' render={() => <div className='initial-search-background'><SearchControl /></div>} />
        <Route exact path='/recipe-search' render={ () =>
          <div className='search-results-container'>
            <div className='search-results-view'>
              <SearchControl />
            </div>
            <div className='recipe-search-display'>
              <RecipeSearchDisplay />
            </div>
          </div>
           }/>
        <Route exact path='/recipe-details/:recipeId' component={DetailDisplay} />
      </div>
    );
  }
}

export default App;
