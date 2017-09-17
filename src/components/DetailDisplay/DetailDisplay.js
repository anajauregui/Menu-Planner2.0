import React, { Component } from 'react';
import RecipeDetailContainer from '../../containers/RecipeDetailContainer';
import SearchContainer from '../../containers/SearchContainer';
import './DetailDisplay.css'

class DetailDisplay extends Component {

  componentDidMount() {
    this.props.fetchRecipeDetails(`http://api.yummly.com/v1/api/recipe/${this.props.selectedRecipeId}?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59`)
  }

  render() {

    if(this.props.recipeDetails.isDetailRequested) {
      const { name, totalTime, rating, numberOfServings, ingredientLines, images} = this.props.recipeDetails.recipeDetails
      const imgUrl = images[0].hostedLargeUrl
      const url = this.props.recipeDetails.recipeDetails.source.sourceRecipeUrl
      const ingredients = ingredientLines.map((ingredientLine, i) => {
        return (
          <ul key={i}>
            <li>{ingredientLine}</li>
          </ul>
        )
      })

      return(
        <div className='detail-view'>
          <div className='info-picture'>
            <h2>{name}</h2>
            <img src={imgUrl}/>
            <p>Total Cook Time: {totalTime}</p>
            <p>Rating: {rating}/5</p>
            <button onClick={() => window.open(url)}>See recipe instructions</button>
          </div>
          <div className='ingredient-list'>
            <div className='num-servings-print'>Number of Servings: {numberOfServings}
              <button onClick={ () => window.print() }>Print</button>
            </div>
            {ingredients}
          </div>
        </div>
      )
    }

    return(
      <div>Waiting...</div>
    )

  }
}

export default SearchContainer(RecipeDetailContainer(DetailDisplay))
