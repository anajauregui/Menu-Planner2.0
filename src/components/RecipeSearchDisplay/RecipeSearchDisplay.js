import React, { Component } from 'react';
import RecipeDetailContainer from '../../containers/RecipeDetailContainer';
import SearchContainer from '../../containers/SearchContainer';

class RecipeSearchDisplay extends Component {
  constructor() {
    super();

    this.state = {
      selectedRecipeId: ''
    }
  }

  getRecipeId(recipeId) {
    this.props.storeRecipeId(recipeId)
  }

  render() {

    if (this.props.searchResults.recipeSearchData) {
      const searchResults = this.props.searchResults.recipeSearchData.map((recipe, i) => {

        return (
          <div className='recipe-search-results' key={recipe.id} onClick={ () => {
            this.props.changeRoute(`/recipe-details/${recipe.id}`);
            this.getRecipeId(recipe.id)

          } }>
            <h3>{recipe.recipeName}</h3>
            <img src={recipe.smallImageUrls[0]} alt='recipes'/>
            <p>Total Time: {recipe.totalTimeInSeconds / 60}</p>
            <p>Rating: {recipe.rating}</p>
          </div>
        )
      })

      return(
        <div>
          {searchResults}
        </div>
      )
    }

    return(
      <div>No searches yet...</div>
    )

  }
}


export default SearchContainer(RecipeDetailContainer(RecipeSearchDisplay))
