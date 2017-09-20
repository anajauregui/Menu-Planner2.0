import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchRecipeSearchData, storeSelectedRecipeId, storeUserSearch } from '../actions/index-actions';

const mapStateToProps = (store) => {
  return {
    searchResults: store.recipeSearch,
    selectedRecipeId: store.storeSelectedRecipeId,
    userSearch: store.storeUserSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipeSearch: (url) => dispatch(fetchRecipeSearchData(url)),

    storeRecipeId: (recipeId) => dispatch(storeSelectedRecipeId(recipeId)),

    saveUserSearch: (userSearchParam) => dispatch(storeUserSearch(userSearchParam)),

    changeRoute: (url) => {
      dispatch(push(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
