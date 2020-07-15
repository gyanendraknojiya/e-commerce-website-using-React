import React from "react";
import { connect } from "react-redux";
import "./CollectionPage.style.scss";

import { CollectionSelector } from "../../Redux/shop/shop.selector";
import CollectionItem from "../Collection-Item/Collection-Item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className="page-item">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: CollectionSelector(props.match.params.collection_id)(state),
});

export default connect(mapStateToProps)(CollectionPage);
