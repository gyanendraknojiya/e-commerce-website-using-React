import React from "react";

import "./header.style.scss";
import { ReactComponent as LOGO } from "../../Assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

function Header({currentUser}) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <LOGO />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <span>Shop</span>
        </Link>
        
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link className="option" to="/signin">
          <span>SignIn</span>
        </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
