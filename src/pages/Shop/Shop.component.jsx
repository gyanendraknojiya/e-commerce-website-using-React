import React from "react";
import SHOP_DATA from "./Shop-Data";
import CollectionPerview from "../../components/Collection-Perview/Collection-Perview.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Collection: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        {this.state.Collection.map(({ id, ...OtherCollectionProps }) => (
          <CollectionPerview key="id" {...OtherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
