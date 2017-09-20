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
  const userSearch = e.target.value

  this.setState({
    recipeSearch: userSearch
  })
}

  saveSearch(userSearchParam) {
    this.props.saveUserSearch(userSearchParam)
  }

  allowEnterBtn(e) {
    if (e.keyCode === 13) {
      this.promptRecipeSearch();
    }
  }

  clearInputField() {
    this.setState({
      recipeSearch: ''
    })
  }

  promptRecipeSearch() {
    const userSearch = this.state.recipeSearch.split(' ').join('+')

    this.props.fetchRecipeSearch(`http://api.yummly.com/v1/api/recipes?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59&q=${userSearch}`);

    this.saveSearch(this.state.recipeSearch);
    this.props.changeRoute('/recipe-search');
    this.clearInputField();
  }

  render() {
    console.log(this.props);
    const isEnabled = this.state.recipeSearch.length > 0

    return (
      <div className='search-field'>
        <input className='recipe-search' placeholder='What would you like to cook?' type='text' value={this.state.recipeSearch} onChange={ (e) => this.userRecipeSearch(e) } onKeyDown={ (e) => this.allowEnterBtn(e) } autoFocus/>
        <button className='search-btn' disabled={!isEnabled} onClick={ () => this.promptRecipeSearch() }>
          Search
        </button>
      </div>
    );
  }
}


export default SearchContainer(SearchControl);
