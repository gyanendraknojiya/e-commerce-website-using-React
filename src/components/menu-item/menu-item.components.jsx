import React from "react";
import { Link } from "react-router-dom";
import "./menu-item.style.scss";

function MenuItem(props) {
  return (
    <div className={`${props.size} menu-item `}>
    <div className='background-image' style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
    <Link className="content" to={`/${props.url}`}>
      <div >
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
      </Link>
    </div>

  );
}

export default MenuItem;
