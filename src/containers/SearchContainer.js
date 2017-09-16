import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchRecipeSearchData, storeSelectedRecipeId } from '../actions/index-actions';

const mapStateToProps = (store) => {
  return {
    searchResults: store.recipeSearch,
    selectedRecipeId: store.storeSelectedRecipeId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipeSearch: (url) => dispatch(fetchRecipeSearchData(url)),

    storeRecipeId: (recipeId) => dispatch(storeSelectedRecipeId(recipeId)),

    changeRoute: (url) => {
      dispatch(push(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
