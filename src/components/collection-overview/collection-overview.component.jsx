import React from "react";
import CollectionPerview from "../Collection-Perview/Collection-Perview.component"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectCollectionForPerview } from "../../Redux/shop/shop.selector";

const CollectionOverview = ( {Collection} ) => {
  console.log(Collection)
    return (
  <div>
    {Collection.map(({ id, ...OtherCollectionProps }) => (
      <CollectionPerview key="id" {...OtherCollectionProps} />
    ))}
  </div>
)};
const mapStateToProps = createStructuredSelector({
  Collection: SelectCollectionForPerview,
}); 

export default connect(mapStateToProps)(CollectionOverview);
