import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";

import "./App.css";

function App() {
  const [currentUser, setUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else {
        setUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <Fragment>
      <Header currentUser={currentUser} />
      <button onClick={() => console.log(currentUser)}>click</button>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={SignInSignUp} />
      </Switch>
    </Fragment>
  );
}

export default App;
