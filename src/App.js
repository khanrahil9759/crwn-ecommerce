import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/Shop";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/shop" exact component={Shop} />
    </Switch>
  );
}

export default App;
