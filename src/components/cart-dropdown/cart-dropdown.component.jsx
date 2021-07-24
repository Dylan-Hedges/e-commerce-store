import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

//This is the dropdown menu when clicking shopping cart icon - .map( ) over the cartItems prop and uses <CartItem> to display them in the cart
const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
        ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

//Maps the global state to this component - saves cart items to a cartItems prop on this component
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
