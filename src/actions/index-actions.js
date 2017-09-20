export const recipeSearch = (recipeSearchData, recipeIds, isSearchComplete) => {
  return {
    type: 'RECIPE_SEARCH',
    recipeSearchData,
    recipeIds,
    isSearchComplete
  }
}

export const storeUserSearch = (userSearchParam) => {
  return {
    type: 'STORE_USER_SEARCH',
    userSearchParam
  }
}

export const fetchRecipeSearchData = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(recipeSearch(data.matches)))
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
}

export const getRecipeDetail = (recipeDetails, isDetailRequested) => {
  return {
    type: 'GET_RECIPE_DETAIL',
    recipeDetails,
    isDetailRequested
  }
}

export const storeSelectedRecipeId = (recipeId) => {
  return {
    type: 'STORE_SELECTED_RECIPE_ID',
    recipeId
  }
}

export const fetchRecipeDetails = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(getRecipeDetail(data)))
      .catch(error => console.log(error))
  }
}
