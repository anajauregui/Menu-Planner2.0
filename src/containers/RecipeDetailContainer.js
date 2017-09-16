import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchRecipeDetails, recipeSearchSelect, selectedRecipeId } from '../actions/index-actions';

const mapStateToProps = (store) => {
  return {
    recipeDetails: store.getRecipeDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipeDetails: (url) => dispatch(fetchRecipeDetails(url)),

    changeRoute: (url) => {
      dispatch(push(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
