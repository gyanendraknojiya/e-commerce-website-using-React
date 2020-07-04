import React from "react";
import "./Cart.style.scss";
import Button from "../Button/Button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.componant";
import {CartItemSeclector} from '../../Redux/Cart/Cart.selector'
import {createStructuredSelector} from 'reselect'

function Cart({CartItems}) {
  return (
    <div className="cart-box">
    <div className='cart-items'>
   {CartItems.length ?  CartItems.map(item=>
      <CartItem key={item.id} {...item} />
    // eslint-disable-next-line jsx-a11y/accessible-emoji
    ): <span className='empty-message'> <span role="img">😔</span><br/> Your Cart is Empty! </span>
  }
  </div>
      <div className="cart-button">
        <Button>Goto to Checkout</Button>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  CartItems:CartItemSeclector
})

export default connect(mapStateToProps) (Cart);
