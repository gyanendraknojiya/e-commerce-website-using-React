import { combineReducers } from "redux";


import UserReducer from "./User/user.reducer";
import CartReducer from './Cart/Cart.reducer'

export default combineReducers({
  user: UserReducer,
  cart: CartReducer
});
