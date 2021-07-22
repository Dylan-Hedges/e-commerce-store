import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

//This is the shopping cart icon in the header
const CartIcon = ({toggleCartHidden, itemCount}) => (
  //Executes the toggleCartHidden action creator when clicked - this action is used to toggle the hide/show state for the shopping cart dropdown menu
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
  </div>
);


//Adds toggleCartHidden function to the props of this component - when called it executes the toggleCartHidden( ) action creator, this AC returns an action (an object) with a type, this is then dispatched to the reducers (reducers look at the action type to see if they care about it)
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

//Calculates the total quantity of items in the cart and maps it (itemCount) to the props of this component
const mapStateToProps = ({cart: {cartItems}}) => ({
  //.reducer( ) iterates over cartItems, accumlates the quantities for the items and returns a single value, this is mapped to itemCount and then displayed on our CartIcon
  itemCount: cartItems.reduce(
    (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
