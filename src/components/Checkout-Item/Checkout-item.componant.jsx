import React from "react";
import "./Checkout-item.style.scss";
import {
  RemoveItem,
  AddItem,
  DecreaseItemQuantity,
} from "../../Redux/Cart/Cart.actions";
import { connect } from "react-redux";

function CheckOutItem({ items, ClearItem, Increase, Decrease }) {
  return (
    <div className="checkout-items">
      <span className="checkout-item">
        <img className="checkout-img" src={items.imageUrl} alt="item" />
      </span>
      <span className="checkout-item">{items.name}</span>

      <span className="checkout-item item-quantity">
        <div
          className="arrow cursor-pointer"
          onClick={() =>
            items.quantity > 1 ? Decrease(items) : ClearItem(items)
          }
        >
          &#10094;
        </div>
        {items.quantity}
        <div className="arrow cursor-pointer" onClick={() => Increase(items)}>
          &#10095;
        </div>
      </span>
      <span className="checkout-item">${items.price}</span>
      <span
        className="checkout-item cursor-pointer"
        onClick={() => ClearItem(items)}
      >
        &#10005;
      </span>
    </div>
  );
}

const mapDispatchToProps = (Dispatch) => ({
  ClearItem: (item) => Dispatch(RemoveItem(item)),
  Increase: (item) => Dispatch(AddItem(item)),
  Decrease: (item) => Dispatch(DecreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
