import React from "react";
import "./Cart.style.scss";
import Button from "../Button/Button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.componant";

function Cart({CartItems}) {
  return (
    <div className="cart-box">
    <div className='cart-items'>
   { CartItems.map(item=>
      <CartItem key={item.id} {...item} />
    )
  }
  </div>
      <div className="cart-button">
        <Button>Goto to Checkout</Button>
      </div>
    </div>
  );
}

const mapStateToProps = ({cart: {CartItems}})=> ({
  CartItems
})

export default connect(mapStateToProps) (Cart);
