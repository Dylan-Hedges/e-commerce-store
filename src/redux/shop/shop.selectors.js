import {createSelector} from 'reselect';

//Pulls off the store piece of state in the Redux Store (these are the images and titles used on the shop page)
const selectShop = state => state.shop;

//Creates a memoized selector with the shop piece of state - cached result is used in shop.component.jsx mapStateToProps
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//Converts the collections from an object to an array - so it can be iterated over in collections-overview.jsx, this is because we cannot .map() over an object, Object.keys(collections) pulls off the keys e.g. hats:, jackets: from the collections object in shop.data.js and stores them in an array, .map(key => collections[key]) maps over the array of keys (e.g. hats) and gets the value (items in the collection) for that key
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)


//Selector that finds and returns the collection based on what the user visits in the URL (e.g. when user visits /hats then return the hats collections) - collections.find() iterates over the collections in the DB, compares the id of each collection (collection.id) to the id of what is in the URL (COLLECTION_ID_MAP[collectionUrlParam] - [collectionUrlParam] is what is in the URL, this is put into the object above to get the corresponding id for that collection)
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
