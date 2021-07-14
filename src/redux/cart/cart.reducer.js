import CartActionTypes from './cart.types';

const INITAL_STATE = {
  hidden: true
};

//Reducer for the shopping cart
const cartReducer = (state = INITAL_STATE, action) => {
  switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      //Toggles the hidden state between true (hide dropdown menu7) or false (show dropdown menu) - no payload recieved, done on type
      return{
        ...state,
        hidden: !state.hidden
      };
      default:
        return state;
  }
};

export default cartReducer;
