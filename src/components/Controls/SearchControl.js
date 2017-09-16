import React, { Component } from 'react';
import SearchContainer from '../../containers/SearchContainer';
import './SearchControl.css';

class SearchControl extends Component {
  constructor() {
    super();

    this.state = {
      recipeSearch: ''
    }
  }

  userRecipeSearch(e) {
  const userSearch = e.target.value.split(' ').join('+')

  this.setState({
    recipeSearch: userSearch
  })
}

  promptRecipeSearch() {
    this.props.fetchRecipeSearch(`http://api.yummly.com/v1/api/recipes?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59&q=${this.state.recipeSearch}`)
  }

  render() {
console.log('SearchProps', this.props);

    return (
      <div className="App">
        <input type='text' value={this.state.recipeSearch} onChange={ e => this.userRecipeSearch(e) }/>
        <button onClick={ () => ((this.promptRecipeSearch(), this.props.changeRoute('/recipe-search'))) }>
          Search
        </button>
      </div>
    );
  }
}

export default SearchContainer(SearchControl);
