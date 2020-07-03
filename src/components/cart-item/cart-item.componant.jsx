import React from "react";
import './cart-item.style.scss'

function CartItem({ imageUrl, name, price, quantity }) {
  return (
    <div className='cart-item'>
        <img className='cart-img' src={imageUrl} alt="item" />
      <span className='name'>{name}<br/>{quantity} x ${price}</span>
    </div>
  );
}

export default CartItem;