import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

//This is the shopping cart icon in the header
const CartIcon = ({toggleCartHidden}) => (
  //Executes the toggleCartHidden action creator when clicked - this action is used to toggle the hide/show state for the shopping cart dropdown menu
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
  </div>
);


//Adds toggleCartHidden function to the props of this component - when called it executes the toggleCartHidden( ) action creator, this AC returns an action (an object) with a type, this is then dispatched to the reducers (reducers look at the action type to see if they care about it)
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
