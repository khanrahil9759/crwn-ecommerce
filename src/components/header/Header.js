import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../components/assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import Cart from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";

const Header = () => {
  const user = useSelector((state) => state);
  const cart = useSelector((state) => state);

  const currentUser = selectCurrentUser(user);
  const toggle = selectCartHidden(cart);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <Cart />
      </div>
      {!toggle ? <CartDropdown /> : ""}
    </div>
  );
};

export default Header;
