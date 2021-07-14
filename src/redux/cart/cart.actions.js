import CartActionTypes from './cart.types';

//Action to hide/show shopping cart dropdown menu
export const toggleCartHidden = () => ({
  //In this case we dont pass in a payload as we are only toggeling the shopping cart dropdown to show or hide which is done in the Reducer, payloads are optional
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
