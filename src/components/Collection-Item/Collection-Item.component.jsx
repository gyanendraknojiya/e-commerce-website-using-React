import React from "react";
import "./Collection-Item.style.scss";
import Button from "../Button/Button.component";
import { AddItem } from "../../Redux/Cart/Cart.actions";
import {connect} from "react-redux";

function CollectionItem({item, AddItem}) {
  const { name, imageUrl, price } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={()=> AddItem(item)} inverted> Add to cart </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>({
  AddItem: (item)=> dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);
