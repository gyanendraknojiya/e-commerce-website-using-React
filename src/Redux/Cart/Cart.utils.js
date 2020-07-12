export const AddItemToCart = (CartItem, CartItemToAdd) => {
  const isItemExists = CartItem.find(
    (CartItem) => CartItem.id === CartItemToAdd.id
  );

  if (isItemExists) {
    return CartItem.map((item) =>
      item.id === CartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...CartItem, { ...CartItemToAdd, quantity: 1 }];
  }
};

export const DecreaseOneQuantity = (CartItem, DecreaseOne) => {
  return CartItem.map((item) => {
    if (item.id === DecreaseOne.id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
};
