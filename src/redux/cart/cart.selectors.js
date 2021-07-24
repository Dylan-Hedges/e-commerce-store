import {createSelector} from 'reselect';

//Recieves global state and stores the cart piece of state
const selectCart = state => state.cart;

//Selector that returns all items in the cart - used to display items in cart-dropdown.component, even if the page is refreshed
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

//Selector that calculates the quantity of items in the cart - used to display the quantity of items on the shopping cart icon, recieves all the cart items returned from the [selectCartItems] selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    //Returns total quantity of all cart items - .reducer( ) iterates over cartItems, accumlates the quantities for the items and returns a single value, this is mapped to itemCount and then displayed on our CartIcon
    cartItems.reduce(
      (accumaltedQuantity, cartItem) =>
        accumaltedQuantity + cartItem.quantity,
        0
      )
);
