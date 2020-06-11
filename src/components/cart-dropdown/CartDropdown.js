import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
