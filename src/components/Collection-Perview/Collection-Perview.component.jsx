import React from "react";
import CollectionItem from "../Collection-Item/Collection-Item.component";
import './Collection-Perview.style.scss';

function CollectionPerview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, index) => index < 4)
          .map(({ id, ...OtherItemsProps }) => (
            <CollectionItem key={id} {...OtherItemsProps} />
          ))}
        ;
      </div>
    </div>
  );
}

export default CollectionPerview;
