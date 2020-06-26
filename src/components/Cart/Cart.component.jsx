import React from "react";
import "./Cart.style.scss";
import Button from "../Button/Button.component";

function Cart() {
  return (
    <div className="cart-box">
      <div className='cart-button'>
        <Button>ADD TO CART</Button>
      </div>
    </div>
  );
}

export default Cart;
