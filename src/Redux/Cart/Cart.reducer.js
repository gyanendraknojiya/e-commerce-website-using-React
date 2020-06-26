const INITIAL_STATE = {
    hidden: true
};

const CartReducer = (state = INITIAL_STATE, action )=>{
    if (action.type === 'Toggle_Cart_Hidden'){
      return {
        ...state,
        hidden: !state.hidden
      }
    } else {
        return state;
    }
};

export default CartReducer;