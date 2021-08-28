import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

//Displays items on the checkout page - displays items user has added to cart on the page, recieves cart items from checkout.component.jsx
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item'/>
      </div>
      <span className='name'></span>
      <span className='quantity'>
        <span className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</span>
          <span className='value'>{quantity}</span>
        <span className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</span>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  )};

//Dispatchs actions - remove item from cart, add item, and decrease quantity of item
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
