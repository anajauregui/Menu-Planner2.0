import * as action from './index-actions';
import mockRecipeSearch from './mockRecipeSearch';
import mockRecipeDetails from './mockRecipeDetails'
import fetchMock from 'fetch-mock';

describe('recipeSearch', () => {

  it('recipeSearch should fetch initial recipe search data', () => {

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

const recipeIds = ["Spanish-Rice-1949720", "Spanish-Rice-2182386", "Easy-Fried-Rice-Restaurant-Style-2173290", "Indian-Lemon-Rice-750599", "Mexican-rice-305846",
"Spiced-rice-303409",
"Mexican-Rice-997435", "Easy-Yellow-Rice-1221474", "Perfect-brown-rice-345839", "Cauliflower-Rice-2077732"]

const isSearchComplete = true

    const expectedAction = {
      type: 'RECIPE_SEARCH',
      recipeSearchData: recipeSearchData,
      recipeIds: recipeIds,
      isSearchComplete: true
    }

    expect(action.recipeSearch(recipeSearchData,recipeIds, isSearchComplete)).toEqual(expectedAction)
  })
})

describe('storeUserSearch', () => {

  it('should store recipeSearch entered by user', () => {

    const userSearchParam = 'pizza'

    const expectedAction = {
      type: 'STORE_USER_SEARCH',
      userSearchParam
    }

    expect(action.storeUserSearch(userSearchParam)).toEqual(expectedAction)
  })
})

describe('fetchRecipeSearchData', () => {

  it('gets the corresponding recipe search data', () => {
    const URL = 'http://api.yummly.com/v1/api/recipes?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59&q=pizza'

    fetchMock.get(URL, {
      status: 200,
      body: mockRecipeSearch
    })

  action.fetchRecipeSearchData(URL)();


  expect(fetchMock.lastUrl()).toEqual('http://api.yummly.com/v1/api/recipes?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59&q=pizza')
  expect(fetchMock.routes[0].method).toEqual('GET');
  expect(fetchMock._matchedCalls.length).toEqual(1);
  expect(fetchMock.routes[0].response.body).toEqual(mockRecipeSearch);
  })
})

describe('getRecipeDetail', () => {

  it('should provide details about selected recipe from search', () => {

    const recipeDetails = mockRecipeDetails
    const isDetailRequested = true

    const getRecipeDetail = {
      type: 'GET_RECIPE_DETAIL',
      recipeDetails: mockRecipeDetails,
      isDetailRequested: true
    }

    expect(action.getRecipeDetail(recipeDetails, isDetailRequested)).toEqual(getRecipeDetail)
  })
})

describe('storeSelectedRecipeId', () => {

  it('store the Id of the recipe selected by the user', () => {

    const recipeId = "Chicken-Pesto-Pizza-2127754"

    const storeSelectedRecipeId = {
      type: 'STORE_SELECTED_RECIPE_ID',
      recipeId: recipeId
    }

    expect(action.storeSelectedRecipeId(recipeId)).toEqual(storeSelectedRecipeId)
  })
})

describe('fetchRecipeDetails', () => {

  it('should return the details of a selected recipe from initial search', () => {
    const URL = 'http://api.yummly.com/v1/api/recipe/Chicken-Pesto-Pizza-2127754?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59'

    fetchMock.get(URL, {
      status: 200,
      body: mockRecipeDetails
    })

  action.fetchRecipeDetails(URL)()

  expect(fetchMock.lastUrl()).toEqual('http://api.yummly.com/v1/api/recipe/Chicken-Pesto-Pizza-2127754?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59');
  expect(fetchMock.routes[0].method).toEqual('GET');
  expect(fetchMock._matchedCalls.length).toEqual(2);
  expect(fetchMock.routes[0].response.body).toEqual(mockRecipeDetails);
  })
})
