import CartActionTypes from './cart.types';

//Action to hide/show shopping cart dropdown menu
export const toggleCartHidden = () => ({
  //In this case we dont pass in a payload as we are only toggeling the shopping cart dropdown to show or hide which is done in the Reducer, payloads are optional
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//Action to add new items to the cart
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

//Action to decrease the quantity of an item from the cart when the user clicks on the quantity arrow on checkout page
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

//Action to remove entire item form the cart when user clicks on cross/delete icon on checkout page
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
