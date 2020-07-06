import React from "react";

import "./checkout.style.scss";

function Checkout() {
  return (
    <div>
      <div className="checkout-box">
        <div className="checkout-header">
          <span className="checkout-title">Product</span>
          <span className="checkout-title">Description</span>
          <span className="checkout-title">Quantity</span>
          <span className="checkout-title">Price</span>
          <span className="checkout-title">Remove</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
