//Adds items to the cart -  groups cart items that are added multiple times, cartItems = existing cart items, cartItemToAdd = cart item we want to add
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //Checks if item already exists in cart - compares the id of the item we want to add to the cart with the ids of the items already in the cart, returns first element in the array that meets this condition, otherwise it returns undefined
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  //If item exists in cart - undefined was not returned
  if(existingCartItem){
    //Update the quantity by +1 - .map() is used because it returns a new array and we need to return a new state so that components can render properly
    return cartItems.map(cartItem =>
        //If the item exists in cart, increase quantity by +1, otherwise return the cart item (quantity not being increased)
        cartItem.id === cartItemToAdd.id
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
      )
  }
  //Returns a new array of cart items - if item does not already exist in cart (above if statement is skipped), add it cart with a quantity of 1, creates a new array for cartItems, spreads in existing cartItems and adds the new item to the end of the array (new item recieved in action.payload)
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
