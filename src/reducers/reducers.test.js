import * as reducers from './reducers';
import mockRecipeDetails from '../actions/mockRecipeDetails';

describe('recipeSearch reducer', () => {

  const initialState = {
    recipeSearchData: null,
    recipeIds: [],
    isSearchComplete: false
  }

  it('should have a default state', () => {

    expect(reducers.recipeSearch(undefined, initialState)).toEqual(initialState)
  })

  it('should return all data relevant to search result', () => {

    const recipeSearchData = [{
"imageUrlsBySize": {
"90": "http://lh3.googleusercontent.com/889XHLs682MRuPg1QU5Ahl4N4V1LbqlQBNP3BVJx8zkDHRCCF9qcwb-KOx70y6kWMK6agK3VBA6375SSDTzZ=s90-c"
},
"sourceDisplayName": "An Italian in my Kitchen",
"ingredients": [
"pizza doughs",
"cherry tomatoes",
"pitted black olives",
"oregano",
"fresh basil leaves",
"salt",
"olive oil",
"mozzarella cheese"
],
"id": "Pizza-1106814",
"smallImageUrls": [
"http://lh3.googleusercontent.com/410HWUmNxHOKKPHavSM_vMHGL0iXlWs8VHXIefQd8bHSi2j35RUud7OBQgjnnGNo5-KCYyrTS39ni2CqEi1P=s90"
],
"recipeName": "Pizza",
"totalTimeInSeconds": 1800,
"attributes": {
"course": [
"Lunch",
"Main Dishes"
]
},
"flavors": null,
"rating": 4
},]

  const recipeIds = ["Pizza-1106814"]

  const isSearchComplete = true

  const recipeSearch = {
    type: 'RECIPE_SEARCH',
    recipeSearchData: recipeSearchData,
    recipeIds: recipeIds,
    isSearchComplete: true
  }

  const expectedResponse = {
    recipeSearchData: recipeSearchData,
    recipeIds: recipeIds,
    isSearchComplete: true
  }

  expect(reducers.recipeSearch(undefined, recipeSearch)).toEqual(expectedResponse)
  })

  describe('storeSelectedRecipeId reducer', () => {

    it('should have an initial state', () => {

      expect(reducers.storeSelectedRecipeId(undefined, '')).toEqual('')
    })

    it('should store Id of selected recipe Id from initial search result', () => {

      const recipeId = ["Pizza-1106814"]

      const storeId = {
        type: 'STORE_SELECTED_RECIPE_ID',
        recipeId: recipeId
      }

      expect(reducers.storeSelectedRecipeId(undefined, storeId)).toEqual(recipeId)
    })

    describe('getRecipeDetail', () => {

      it('should have an initial state', () => {

        expect(reducers.getRecipeDetail(undefined, {})).toEqual({})

        it('should return detailed data relevant to selected recipe from initial search', () => {

          const displayDetails = {
            type: 'GET_RECIPE_DETAIL',
            recipeDetails,
            isDetailRequested: false
          }

          const expectedResponse = {
            recipeDetails: mockRecipeDetails,
            isDetailRequested: true
          }

          expect(reducers.getRecipeDetail(undefined, displayDetails)).toEqual(expectedResponse)
        })
      })
    })
  })
})
