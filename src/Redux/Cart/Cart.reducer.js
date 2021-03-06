import { AddItemToCart, DecreaseOneQuantity } from './Cart.utils'

const INITIAL_STATE = {
  hidden: true,
  CartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "Toggle_Cart_Hidden") {
    return {
      ...state,
      hidden: !state.hidden,
    };
  } else if (action.type === "Add_Items_to_cart") {
    return {
      ...state,
      CartItems: AddItemToCart(state.CartItems, action.payload),
    }
  } else if (action.type === "remove_item_from_cart") {
    return {
      ...state,
      CartItems: state.CartItems.filter(item => item.id !== action.payload.id)
    }
  } 
  else if (action.type === "decrease_one_quantity") {
    return {
      ...state,
      CartItems: DecreaseOneQuantity(state.CartItems, action.payload)
    }
  } 
  else {
    return state;
  }
};

export default CartReducer;
