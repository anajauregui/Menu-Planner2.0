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

  // allowEnterBtn(e) {
  //   if (e.keyCode === 13) {
  //     this.userRecipeSearch();
  //     this.promptRecipeSearch();
  //   }
  // }

  clearInputField() {
    this.setState({
      recipeSearch: ''
    })
  }

  promptRecipeSearch() {
    this.props.fetchRecipeSearch(`http://api.yummly.com/v1/api/recipes?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59&q=${this.state.recipeSearch}`)
  }

  render() {

    return (
      <div className='search-field'>
        <input className='recipe-search' placeholder='What would you like to cook?' type='text' value={this.state.recipeSearch} onChange={ (e) => this.userRecipeSearch(e) } autoFocus/>
        <button className='search-btn' onClick={ () => ((this.promptRecipeSearch(), this.props.changeRoute('/recipe-search'), this.clearInputField())) }>
          Search
        </button>
      </div>
    );
  }
}

// onKeyDown={ (e) => this.allowEnterBtn(e) }

export default SearchContainer(SearchControl);
