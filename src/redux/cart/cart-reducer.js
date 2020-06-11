import { addItemToCart, removeItemFromCart } from "./cart-utils";

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
    case "remove-item":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case "clear-item":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
