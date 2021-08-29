import {createSelector} from 'reselect';

//Pulls off the store piece of state in the Redux Store (these are the images and titles used on the shop page)
const selectShop = state => state.shop;

//Creates a memoized selector with the shop piece of state - cached result is used in shop.component.jsx mapStateToProps
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
