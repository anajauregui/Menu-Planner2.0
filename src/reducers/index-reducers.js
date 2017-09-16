import { combineReducers } from 'redux';
import { recipeSearch, getRecipeDetail, storeSelectedRecipeId} from './reducers';

const rootReducer = combineReducers({
  recipeSearch,
  getRecipeDetail,
  storeSelectedRecipeId
})

export default rootReducer
