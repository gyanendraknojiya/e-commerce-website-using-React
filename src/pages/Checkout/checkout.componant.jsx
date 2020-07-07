import React from "react";

import "./checkout.style.scss";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {CartItemSeclector, CartTotalPrice} from '../../Redux/Cart/Cart.selector'
import CheckOutItem from '../../components/Checkout-Item/Checkout-item.componant'

function Checkout({CartItems, total}) {
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
        <div className='checkout'>
        {CartItems.length>0? CartItems.map(items=>
         <CheckOutItem items={items} />
        ): null}
        </div>
        <hr/>
        <span className='checkout-total'>Total: ${total}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  CartItems:CartItemSeclector,
  total: CartTotalPrice
})

export default connect(mapStateToProps)(Checkout);
