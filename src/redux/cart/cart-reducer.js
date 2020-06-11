import { addItemToCart } from "./cart-utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle-cart-hidden":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "add-item":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
