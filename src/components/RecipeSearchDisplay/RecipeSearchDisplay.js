import React, { Component } from 'react';
import RecipeDetailContainer from '../../containers/RecipeDetailContainer';
import SearchContainer from '../../containers/SearchContainer';
import './RecipeSearchDisplay.css';

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

        const divStyle = {
          backgroundImage: `url(${recipe.smallImageUrls[0]})`,
        }

        return (
          <div className='recipe' key={recipe.id} >
            <h3 className='recipe-names'>{recipe.recipeName}</h3>
            <div className='recipe-search-results' style={divStyle} onClick={ () => {
              this.props.changeRoute(`/recipe-details/${recipe.id}`);
              this.getRecipeId(recipe.id) } }>
              <div className='time-rating'>
                <p>Total Time: {recipe.totalTimeInSeconds / 60} min</p>
                <p>Rating: {recipe.rating} / 5</p>
                <p>Click for Recipe Details</p>
              </div>
            </div>
          </div>
        )
      })

      return(
        <div className='recipe-results-container'>
          {searchResults}
        </div>
      )
    }

    return(
      <div className='waiting'>Searching for your delicious results...</div>
    )

  }
}


export default SearchContainer(RecipeDetailContainer(RecipeSearchDisplay))
