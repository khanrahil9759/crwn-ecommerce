import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ history }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const cartItems = selectCartItems(state);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
