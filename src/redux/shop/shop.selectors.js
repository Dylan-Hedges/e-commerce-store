import {createSelector} from 'reselect';

//Stores the collection from the URL (e.g. /hats) agaisnt the corresponding id for that collection - takes the URL string we get from collection.component.jsx and saves it agaisnt the corresponding collection id, this is because the collections have numbered ids (e.g. hats id = 1) and we cant compare it agaisnt the string from the URL (e.g. /hats)
const COLLECTION_ID_MAP = {
  hats: 1,
  snakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

//Pulls off the store piece of state in the Redux Store (these are the images and titles used on the shop page)
const selectShop = state => state.shop;

//Creates a memoized selector with the shop piece of state - cached result is used in shop.component.jsx mapStateToProps
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//Selector that finds and returns the collection based on what the user visits in the URL (e.g. when user visits /hats then return the hats collections) - collections.find() iterates over the collections in the DB, compares the id of each collection (collection.id) to the id of what is in the URL (COLLECTION_ID_MAP[collectionUrlParam] - [collectionUrlParam] is what is in the URL, this is put into the object above to get the corresponding id for that collection)
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
      collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );
