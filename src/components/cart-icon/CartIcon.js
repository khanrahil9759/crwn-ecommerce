import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

import { ReactComponent as CartIcon } from "../assets/cart.svg";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default Cart;
