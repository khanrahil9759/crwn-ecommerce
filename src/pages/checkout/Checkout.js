import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = () => {
  const state = useSelector((state) => state);

  const cartItems = selectCartItems(state);
  const total = selectCartTotal(state);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}{" "}
      <div className="total">TOTAL: ${total}</div>
    </div>
  );
};

export default Checkout;
