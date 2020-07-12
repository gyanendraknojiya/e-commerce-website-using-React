import { createSelector } from "reselect";

const SelectCart = (state) => state.cart;

export const CartItemSeclector = createSelector(
  [SelectCart],
  (cart) => cart.CartItems
);
export const CountCartItemSelector = createSelector(
  [CartItemSeclector],
  (CartItems) => CartItems.reduce((a, b) => a + b.quantity, 0)
);

export const HiddenSelector = createSelector(
  [SelectCart], cart => cart.hidden
)

export const CartTotalPrice = createSelector(
  [CartItemSeclector],
  (CartItems) => CartItems.reduce((a, b) => a + b.quantity * b.price, 0)
);

