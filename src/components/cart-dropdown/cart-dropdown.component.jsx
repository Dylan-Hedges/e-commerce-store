import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

//This is the dropdown menu when clicking shopping cart icon - .map( ) over the cartItems prop and uses <CartItem> to display them in the cart
const CartDropdown = ({cartItems, history, dispatch}) => (
  //Displays cart items in the dropdown or a message - if cartItems.length is not greater than 0 it evaluates to false and displays the messsage, if it is greater than 0 it displays the cart items, when we use connect() it provides the component with dispatch functionality (passed into the component as a prop), this means we can dispatch an action that toggles the hide dropdown state and hides the dropdown menu without needing to write mapDispatchToProps()
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//Maps the global state to this component - saves cart items to a cartItems prop on this component, createStructuredSelector is a quick way to execute multiple selectors and passes the global state into each selector
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//withRouter() provides routing functionality, connect() connects the component to the Redux Store
export default withRouter(connect(mapStateToProps)(CartDropdown));
