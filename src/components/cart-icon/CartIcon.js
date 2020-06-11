import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { ReactComponent as CartIcon } from "../assets/cart.svg";

const Cart = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const itemCount = selectCartItemsCount(state);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default Cart;
