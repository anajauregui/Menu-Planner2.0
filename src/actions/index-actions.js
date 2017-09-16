export const recipeSearch = (recipeSearchData, recipeIds, isSearchComplete) => {
  return {
    type: 'RECIPE_SEARCH',
    recipeSearchData,
    recipeIds,
    isSearchComplete
  }
}

export const fetchRecipeSearchData = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(recipeSearch(data.matches))
      })
      .then(result => console.log(result))
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
      .then(data => {
        dispatch(getRecipeDetail(data))
      })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
}
