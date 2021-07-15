import CartActionTypes from './cart.types';

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
      //Adds a new item when user clicks add to cart button - creates a new array for cartItems, spreads in existing cartItems and adds the new item to the end of the array (new item recieved in action.payload)
      case CartActionTypes.ADD_ITEM:
        return{
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      default:
        return state;
  }
};

export default cartReducer;
