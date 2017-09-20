import { combineReducers } from 'redux';
import { recipeSearch, getRecipeDetail, storeSelectedRecipeId, storeUserSearch} from './reducers';

const rootReducer = combineReducers({
  recipeSearch,
  getRecipeDetail,
  storeSelectedRecipeId,
  storeUserSearch
})

export default rootReducer
