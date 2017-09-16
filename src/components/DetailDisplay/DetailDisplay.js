import React, { Component } from 'react';
import RecipeDetailContainer from '../../containers/RecipeDetailContainer';
import SearchContainer from '../../containers/SearchContainer';

class DetailDisplay extends Component {

  componentDidMount() {
    this.props.fetchRecipeDetails(`http://api.yummly.com/v1/api/recipe/${this.props.selectedRecipeId}?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59`)
  }

  render() {

    console.log('Details', this.props);

    if(this.props.recipeDetails.isDetailRequested) {
      const { name, totalTime, rating, numberOfServings, ingredientLines, images, source } = this.props.recipeDetails.recipeDetails
      const imgUrl = images[0].hostedLargeUrl
      const sourceUrl = this.props.recipeDetails.recipeDetails.source.SourceRecipeUrl
      const ingredients = ingredientLines.map((ingredientLine, i) => {
        return (
          <ul key={i}>
            <li>{ingredientLine}</li>
          </ul>
        )
      })
console.log(sourceUrl);
      return(
        <div>
          <h2>{name}</h2>
          <img src={imgUrl}/>
          <p>Total Cook Time: {totalTime}</p>
          <p>Rating: {rating}/5</p>
          <div>
            <p>Number of Servings: {numberOfServings}</p>
            <button onClick={ () => window.print() }>Print</button>
          </div>
          <div>{ingredients}</div>
          <button onClick={ () => window.open(sourceUrl) }>See recipe instructions</button>
        </div>
      )
    }

    return(
      <div>Waiting...</div>
    )

  }
}

export default SearchContainer(RecipeDetailContainer(DetailDisplay))
