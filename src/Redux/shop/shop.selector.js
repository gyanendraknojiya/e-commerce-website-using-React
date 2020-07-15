import { createSelector } from "reselect";

const ShopSelector = (state) => state.ShopData;

export const ShopItemSelector = createSelector(
  [ShopSelector],
  (ShopItems) => ShopItems.shop
);

export const SelectCollectionForPerview = createSelector(
  [ShopItemSelector],
  (collections) => Object.keys(collections).map((item) => collections[item])
);

export const CollectionSelector = (CollectionUrlParams) =>
  createSelector(
    [ShopItemSelector],
    (collection) => collection[CollectionUrlParams]
  );
