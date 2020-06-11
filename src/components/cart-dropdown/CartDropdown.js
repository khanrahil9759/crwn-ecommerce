import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const CartDropdown = () => {
  const state = useSelector((state) => state);

  const cartItems = selectCartItems(state);
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
