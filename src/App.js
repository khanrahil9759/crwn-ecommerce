import React, { Fragment } from "react";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </Fragment>
  );
}

export default App;
