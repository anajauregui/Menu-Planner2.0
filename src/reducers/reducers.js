const initialState = {
  recipeSearchData: null,
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

export const storeSelectedRecipeId = (state = '', action) => {
  switch (action.type) {
    case 'STORE_SELECTED_RECIPE_ID':
      return action.recipeId

    default:
      return state
  }
}


// const getRecipeDetailState = {
//   recipeDetails: null,
//   selectedRecipeId: ''
//   isDetailRequested: false
// }

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