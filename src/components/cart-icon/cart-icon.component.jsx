import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

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

//Maps the result of the selectCartItemsCount selector to the itemCount props of this component, selectCartItemsCount calculates the quantity of items in the cart, createStructuredSelector is a quick way to execute multiple selectors and passes the global state into each selector
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
