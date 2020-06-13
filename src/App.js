import React, { Fragment, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selector";

import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";
import Checkout from "./pages/checkout/Checkout";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const currentUser = selectCurrentUser(state);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              currentUser: { id: snapShot.id, ...snapShot.data() },
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/signin"
          exact
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </Fragment>
  );
};

export default App;
