import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

//This is the shopping cart icon in the header
const CartIcon = ({toggleCartHidden}) => (
  //Executes the toggleCartHidden action creator when clicked
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
  </div>
);

//Maps and dispatches the toggleCartHidden action - this action is used to toggle the hide/show state for the shopping cart dropdown menu
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
