import { combineReducers } from "redux";


import UserReducer from "./User/user.reducer";
import CartReducer from './Cart/Cart.reducer'
import DirectoryReducer from './directory/directory.reducer'
import ShopReducer from './shop/shop.reducer'

export default combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  ShopData : ShopReducer
});

