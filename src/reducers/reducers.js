const initialState = {
  recipeSearchData: [],
  recipeIds: [],
  isSearchComplete: false
}

export const recipeSearch = (state = initialState, action) => {
  switch (action.type) {
    case 'RECIPE_SEARCH':
      return {
        recipeSearchData: action.recipeSearchData,
        recipeIds: action.recipeSearchData.map(recipe => recipe.id),
        isSearchComplete: true
      }

    default:
      return state
  }
}

export const storeUserSearch = (state = '', action) => {
  switch (action.type) {
    case 'STORE_USER_SEARCH':
      return action.userSearchParam

    default:
      return state
  }
}

export const storeSelectedRecipeId = (state = '', action) => {
  switch (action.type) {
    case 'STORE_SELECTED_RECIPE_ID':
      return action.recipeId

    default:
      return state
  }
}

export const getRecipeDetail = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RECIPE_DETAIL':
      return {
        recipeDetails: action.recipeDetails,
        isDetailRequested: true
      }

    default:
      return state
  }
}
