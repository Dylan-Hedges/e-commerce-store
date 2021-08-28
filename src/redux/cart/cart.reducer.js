import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';

//Sets the inital state for the Global State
const INITAL_STATE = {
  hidden: true,
  cartItems: []
};

//Reducer for the shopping cart
const cartReducer = (state = INITAL_STATE, action) => {
  switch(action.type){
    //Hides/shows dropdown menu when clicking shopping cart
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      //Toggles the hidden state between true (hide dropdown menu) or false (show dropdown menu) - no payload recieved, done on type
      return{
        ...state,
        hidden: !state.hidden
      };
      //Adds a new item when user clicks add to cart button - executes the addItemToCart( ) function
      case CartActionTypes.ADD_ITEM:
        return{
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }
      //Removes item from the cart when the user clicks the cross/delete icon on the checkout page - recieves the id of the item we want to remove (action.payload.id), compares it to the id of items in the cart, if it is NOT equal it puts that item in a new array (keeps it) otherwise it filters it out
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return{
          ...state,
          cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
          }
      default:
        return state;
  }
};

export default cartReducer;
