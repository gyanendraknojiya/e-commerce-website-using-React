import React from "react";
import { ReactComponent as CartImage } from "../../Assets/cartimage.svg";
import "./cart-image.style.scss";
import { ToggleCart } from "../../Redux/Cart/Cart.actions";
import { connect } from "react-redux";
import { CountCartItemSelector } from "../../Redux/Cart/Cart.selector";
import { createStructuredSelector} from 'reselect'

function CartLogo({ ToggleCart, count }) {
  return (
    <div className="cart-logo" onClick={() => ToggleCart()}>
      <CartImage />

      <span className="count">{count}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  ToggleCart: () => dispatch(ToggleCart()),
});
const mapStateToProps = createStructuredSelector({
  count: CountCartItemSelector
});
export default connect(mapStateToProps, mapDispatchToProps)(CartLogo);
