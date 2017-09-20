import React, { Component } from 'react';
import RecipeDetailContainer from '../../containers/RecipeDetailContainer';
import SearchContainer from '../../containers/SearchContainer';
import './DetailDisplay.css'

class DetailDisplay extends Component {

  componentDidMount() {
    this.props.fetchRecipeDetails(`http://api.yummly.com/v1/api/recipe/${this.props.selectedRecipeId}?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59`)
  }

  backToSearch() {
    this.props.changeRoute('/recipe-search')
  }

  cleanUpDuplicateIngredients(ingredientArray) {
    return ingredientArray.filter((elem, i, arr) => {
      return arr.indexOf(elem) === i
    })
  }


  render() {

    if(this.props.recipeDetails.isDetailRequested) {
      const { name, totalTime, rating, numberOfServings, ingredientLines, images} = this.props.recipeDetails.recipeDetails

      const imgUrl = images[0].hostedLargeUrl
      const url = this.props.recipeDetails.recipeDetails.source.sourceRecipeUrl
      const ingredients = this.cleanUpDuplicateIngredients(ingredientLines).map((ingredientLine, i) => {
        return (
          <ul key={i}>
            <li>{ingredientLine}</li>
          </ul>
        )
      })

      return(
        <div className='detail-view'>
          <div className='recipe-detail-info'>
            <h2 className='recipe-name'>{name}</h2>
            <img className='recipe-image' src={imgUrl} alt='recipe display'/>
            <div className='extra-details-instructions'>
              <p>Total Cook Time: {totalTime}</p>
              <p>Rating: {rating} / 5</p>
              <button onClick={() => window.open(url)}>See recipe instructions</button>
            </div>
          </div>
          <div className='ingredient-list'>
            <div onClick={() => this.backToSearch()}><p className='close-tab'>[X]</p></div>
            <div className='num-servings-print'> Number of Servings: {numberOfServings}
            </div>
            {ingredients}
            <div className='print-btn-container'>
              <button className='print-btn' onClick={() => window.print()}>Print</button>
            </div>
          </div>
        </div>
      )
    }

    return(
      <div className='waiting'>Tell us what you would like to cook, so we can provide you with delicious results...</div>
    )

  }
}

export default SearchContainer(RecipeDetailContainer(DetailDisplay))
