import React from "react";

import "./header.style.scss";
import { ReactComponent as LOGO } from "../../Assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartLogo from "../Cart-image/cart-image.component";
import Cart from "../Cart/Cart.component";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <LOGO />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <h4>Shop</h4>
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            <h4>SignOut</h4> 
          </div>
        ) : (
          <Link className="option" to="/signin">
            <h4>SignIn</h4>
          </Link>
        )}
        <Link className="option" to="/">
          <h4>Contact</h4>
        </Link>
        <div className="option">
            <CartLogo />
          </div>
        {!hidden ? (
         <Cart/>
        ) : null}
      </div>
    </div>
  );
}



const mapStateToProps = ({ user: { currentUser } , cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
