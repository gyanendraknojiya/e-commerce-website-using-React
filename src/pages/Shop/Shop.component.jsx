import React from "react";
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {  Route } from "react-router-dom";
import CollectionPage from '../../components/collection-page/CollectionPage.component'

const Shop = ({match})=>{
    return (
      <div>
       <Route exact path={`${match.path}`} component={CollectionOverview} />
       <Route  path={`${match.path}/:collection_id`} component={CollectionPage} />
      </div>
    );
  }


export default Shop;
